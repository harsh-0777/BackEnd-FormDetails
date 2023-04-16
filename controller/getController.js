const db=require('../utils/databaseConnect');

exports.getAllData=async(req,res)=>{
    let sql=`SELECT * FROM form where`;

    const newData= await db.query(sql);

    if(!newData){
        res.status(404).json({
            success:false,
            message:"Data not Found"
        })
    }

    res.status(200).json({
        success:true,
        newData: newData[0]                      
    })
}


exports.insertData=async(req,res)=>{

    const {EmpName,JobTitle,Phone,Email,Address,City,State,PcontactName,PcontactPhone,Prelation,ScontactName,ScontactPhone,Srelation}=req.body;
    const sql=`insert into form(EmpName,JobTitle,Phone,Email,Address,City,State,PcontactName,PcontactPhone,Prelation,ScontactName,ScontactPhone,Srelation) value( "${EmpName}", "${JobTitle}", "${Phone}", "${Email}", "${Address}", "${City}", "${State}", "${PcontactName}", "${PcontactPhone}", "${Prelation}", "${ScontactName}", "${ScontactPhone}","${Srelation}");`;

    const newData= await db.query(sql);

    if(newData){
        res.status(200).json({
            success:true,
            newData
        })
    }

    else {
        res.status(400).json({
            success:false,
            message:"Data not inserted"
        })
    }
}

exports.GetData=async(req,res)=>{
    var id=req.params.id;
    const sql=`SELECT * FROM form where id=${id}`;

    const newData= await db.query(sql);

    if(newData){
        res.status(200).json({
            success:true,
            newData: newData[0]                   
        })
    }

    else {
        res.status(404).json({
            success:false,
            message:"Data not Found"
        })
    }
}

exports.deleteData=async(req,res)=>{ 
    var id=req.params.id;
    const sql=`DELETE FROM form where id=${id}`;

    const newData=await db.query(sql);

    if(!newData){
        res.status(404).json({
            success:false,
            message:"Data not Found"
        })
    }

    res.status(200).json({  
        success:true,
        message:"Data Deleted Successfully"
    })
}

exports.updateData=async(req,res)=>{
    const id=req.params.id;
    const {EmpName,JobTitle,Phone,Email,Address,City,State,PcontactName,PcontactPhone,Prelation,ScontactName,ScontactPhone,Srelation}=req.body;
    const sql=`UPDATE form SET EmpName="${EmpName}",JobTitle="${JobTitle}",Phone="${Phone}",Email="${Email}",Address="${Address}",City="${City}",State="${State}",PcontactName="${PcontactName}",PcontactPhone="${PcontactPhone}",Prelation="${Prelation}",ScontactName="${ScontactName}",ScontactPhone="${ScontactPhone}",Srelation="${Srelation}" WHERE id=${id}`;

    const newData=await db.query(sql);

    res.status(200).json({
        success:true,
        message:"Data Updated Successfully",
        newData
    })

}