
const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = new sqlite3.Database("/tmp/db.sqlite");

db.serialize(()=>{
  db.run(`CREATE TABLE IF NOT EXISTS users(
    id TEXT PRIMARY KEY,
    balance INTEGER DEFAULT 0
  )`);
});

app.post("/get-user",(req,res)=>{
  const {id}=req.body;

  db.get("SELECT * FROM users WHERE id=?",[id],(err,row)=>{
    if(!row){
      db.run("INSERT INTO users(id,balance) VALUES(?,0)",[id]);
      return res.json({balance:0});
    }
    res.json({balance:row.balance});
  });
});

app.post("/deposit",(req,res)=>{
  const {id,amount}=req.body;

  db.get("SELECT * FROM users WHERE id=?",[id],(err,user)=>{
    const newBalance=(user?.balance||0)+amount;
    db.run("INSERT OR REPLACE INTO users(id,balance) VALUES(?,?)",[id,newBalance]);
    res.json({balance:newBalance});
  });
});

app.post("/spin",(req,res)=>{
  const {id}=req.body;

  db.get("SELECT * FROM users WHERE id=?",[id],(err,user)=>{
    if(!user || user.balance<100){
      return res.json({error:"no money"});
    }

    const items=[0,10,20,50,100,200];
    const win=items[Math.floor(Math.random()*items.length)];

    const newBalance=user.balance-100+win;

    db.run("UPDATE users SET balance=? WHERE id=?",[newBalance,id]);

    res.json({win,balance:newBalance});
  });
});

const PORT=process.env.PORT||3000;
app.listen(PORT,()=>console.log("Server started "+PORT));
