const e = require('express');
const {Router}= require('express');
const router= Router();

const mysqlConnection=require('../database');

router.get('/usuarios',(req, res)=>{
    mysqlConnection.query('SELECT * FROM Usuario',(err, row, fields)=>{
        if(!err){
            res.json(row);
        }else{
            console.log(err);
        }
    })
})

router.post('/insertarusuario',(req, res, err)=>{
    const sql ='INSERT INTO Usuario SET ?';
    const objetoUsuario={
        idUsuario :req.body,
        nombre_usuario:req.body,
        apellido_1:req.body,
        apellido_2:req.body,
        domicilio:req.body,
        telefono_fijo:req.body,
        celular:req.body,
        correo:req.body,
        fecha_registro:req.body,  
        municipio:req.body,
        estado:req.body,
        pais:req.body,  
        password:req.body,
        tipousuario: req.body,
        cedula_profesional: req.body    
    }
    mysqlConnection.query(sql,objetoUsuario,(err, row, fields) =>{
        if(!err){
            res.json({Status:'Estblecimiento insertado'});
        }else{
            console.log(err);
           
        }
    })
});

module.exports=router;

