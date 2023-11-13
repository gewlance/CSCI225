function DisplayInfo(){
    
    //getting value from boxes
    var KwHout = parseInt(document.getElementById("KwHourForm").value);
    var numDays = parseInt(document.getElementById("numDaysForm").value);
    var cityLimits = document.getElementById("cityLimitsBox").checked;
    var summerMonth = document.getElementById("sumMonBox").checked;
    var saleTax = .01 * parseInt(document.getElementById("saleTaxForm").value);

    //calculating outputs
    var BaseChargeOut = numDays * 46.03 * 0.01;

    if(summerMonth == true){
        if(KwHout>1000){
            KwHout = KwHout - 1000;
            t3Out = KwHout * 0.114625;
            t2Out = 350 * 0.110748;
            t1Out = 650 * 0.066678;
        }else if(KwHout>650){
            KwHout = KwHout - 650;
            t2Out = KwHout * 0.110748;
            t1Out = 650 * 0.066678;
        }else if(KwHout>0){
            t1Out = KwHout * 0.066678;
        }
    }else{
        if(KwHout>1000){
            KwHout = KwHout - 1000;
            t3Out = KwHout * 0.062404;
            t2Out = 350 * 0.062404;
            t1Out = 650 * 0.062404;
        }else if(KwHout>650){
            KwHout = KwHout - 650;
            t3Out = 0;
            t2Out = KwHout * 0.062404;
            t1Out = 650 * 0.062404;
        }else if(KwHout>0){
            t3Out = 0;
            t2Out = 0;
            t1Out = KwHout * 0.062404;
        }
    }
    
    baseRout = BaseChargeOut + t1Out + t2Out + t3Out;
    
    if(summerMonth == true){
        FCRout = KwHout * 0.045876;
    }else{
        FCRout = KwHout * .042859; 
    }
    
    DSMRRout = .015989 * baseRout;

    NCCRRout = .041562 * baseRout;
    
    ECCRRout = .162813 * baseRout;
    
    totalRout = baseRout + FCRout + DSMRRout + NCCRRout + ECCRRout;
    
    if(cityLimits == true){
        ffOut = .030674 * totalRout;
    }else{
        ffOut = .011839 * totalRout;
    }

    totalNoTaxOut = totalRout + ffOut;
    
    totalOut = totalNoTaxOut + (totalNoTaxOut * saleTax);

    //page redirect if bill is >$500
    if(totalOut>500){
        window.alert("Your bill is over $500! Clicking 'OK' will redirect you to a page that will inform you about saving money on your bill.");
        window.location.href = "https://www.georgiapower.com/residential/save-money-and-energy/products-programs.html";
    }
    
    //returning outputs to boxes
    document.getElementById("BaseCharge").textContent = Math.round(BaseChargeOut * 100)/100;
    document.getElementById("t1").textContent = Math.round(t1Out * 100)/100;
    document.getElementById("t2").textContent = Math.round(t2Out * 100)/100;
    document.getElementById("t3").textContent = Math.round(t3Out * 100)/100;
    document.getElementById("baseRevenue").textContent = Math.round(baseRout * 100)/100;
    document.getElementById("FCR").textContent = Math.round(FCRout * 100)/100;
    document.getElementById("DSMRR").textContent = Math.round(DSMRRout * 100)/100;
    document.getElementById("NCCRR").textContent = Math.round(NCCRRout * 100)/100;
    document.getElementById("ECCRR").textContent = Math.round(ECCRRout * 100)/100;
    document.getElementById("TotalRevenue").textContent = Math.round(totalRout * 100)/100;
    document.getElementById("franchiseFee").textContent = Math.round(ffOut * 100)/100;
    document.getElementById("totalNoTax").textContent = Math.round(totalNoTaxOut * 100)/100;
    document.getElementById("total").textContent = Math.round(totalOut * 100)/100;
}

submit = document.getElementById("SubmitBtn");
submit.addEventListener("click", function (e){
    e.preventDefault();
});
submit.addEventListener("click",DisplayInfo,false);