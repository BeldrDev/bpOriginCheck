/*
 *  bpOriginCheck
 *  (c) 2017-2021 BeldrProductions
 *  
 *  For more information about the script,
 *  functions or documentation please visit:
 *  https://beldrproductions.nl/origincheck
 * 
 *  For general information about BeldrProductions 
 *  or Terms of Service / Privacy Policy please visit:
 *  https://beldrproductions.nl
 * 
 *  License
 *  bpOriginCheck is licensed under Creative Commons Attribution 4.0 International
 *  This license requires that reusers give credit to the creator. It allows reusers 
 *  to distribute, remix, adapt, and build upon the material in any medium or format, 
 *  even for commercial purposes.
 *  To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/
 *  
 *  Code written by Sem van de Beld
 *  v0.1 - Last edited on 08-11-2021
*/

const bpOriginCheck = {
    checkRunning: (type)=>{
        const message = "bpOriginCheck Running on version 0.1 - Check beldrproductions.nl/origincheck for more info";
        if(type == "alert"){
            alert(message)
        }else if (type == "console"){
            console.log(message)
        }else{
            console.log(message)
        }
    },
    executeCheck:(homeurl, action, redirurl)=>{
        if(!homeurl || !action){
            throw new Error('bpOriginCheck - ERROR at executeCheck. Please include the required function paramaters before calling.')
        }
        console.log("bpOriginCheck - Checking...")
        const cururl = location.href;
        if (cururl != homeurl){
            if(action == "redirect"){
                if (!redirurl){
                    throw new Error('bpOriginCheck - ERROR at executeCheck. Expected a redirurl when using the redirect action.')
                }
                location.href = redirurl;
                console.log("bpOriginCheck - Check complete. No origin match. Redirecting to specified redirurl")
                return false;
            }else if(action == "message"){
                document.body.innerHTML = "<h1>Blocked by bpOriginCheck</h1><br><p>Your site access has been blocked by bpOriginCheck because you are not viewing this site on the original website.</p><br><p><i>Your URL= " + cururl + "<br>Expected URL= " + homeurl + "</i></p><br><p><b>If you think this was a mistake. Please contact the site owner or <a href='https://beldrproductions.nl'>BeldrProductions</a>.</b></p>";
                console.log("bpOriginCheck - Check complete. No origin match. Showing requested message")
                return false;
            }
        }else{
            console.log("bpOriginCheck - Check complete. Origin match.")
            return true;
        }

    }
}