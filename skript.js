$(function(){
    const myAjax=new MyAjax;
    const konyvek =[];
    const szloelem= $(".megjelenit");
    let apivegpont="http://localhost:3000/konyvek";
    let szulo="?tipus=regény";
    let rendez="?_sort=ar&_order=desc";
    //apivegpont+=szulo;
    myAjax.getAdat(apivegpont,konyvek,konyvekmegjeleit);
    // sd

    // let ujadat2={
    //         szerzo:"Nagy Anna",
    //         cim:"Családok",
    //         ar:1344,
    //         tipus:"Regény"
    // }
     
    $("#ujadat").on("click",()=>{
        let ujadat={
            "szerzo":$("#szerzo").val(),
            "cim":$("#cim").val(),
            "ar":$("#ar").val(),
            "tipus":$("#tipus").val()
    }
        myAjax.postAdat(apivegpont,ujadat);
    });

    $("#torol").on("click",()=>{
        myAjax.deletAdat(apivegpont,1);
    })

    $("#modosit").on("click",()=>{
        myAjax.putAdat(apivegpont,ujadat2,2);
    })

    $("#rendezes").on("click",()=>{
        apivegpont+=rendez;
        myAjax.getAdat(apivegpont,konyvek,konyvekmegjeleit);
    })
    $("#kereses").on("keyup",()=>{
        let apivegpont="http://localhost:3000/konyvek";
        /*let kerso=$("#kereses").val(); //keresőmező szövege
        apivegpont+="?q="+kerso;*/
        apivegpont+="?q="+$("#kereses").val();
        console.log(apivegpont);
        myAjax.getAdat(apivegpont,konyvek,konyvekmegjeleit);
    })
    
    console.log(apivegpont);

    


    function konyvekmegjeleit(tomb){
        let sablon="";
        tomb.forEach((elem)=>{
            sablon +=`
                <div>
                <h3>${elem.szerzo}
                </h3>
                <h4 class="cim">
                ${elem.szerzo}
                </h4>
                <p>
                ${elem.tipus}
                </p>
                <span class="ar">${elem.ar}</span>
                </div>
                `;
        })
        szloelem.html(sablon);

    }
});