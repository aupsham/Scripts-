console.log("[*] Started: Find All Methods of a Specific Class"); 
if (Java.available) { 
    try { 
        var className = "com.example.MyClass"; // Replace with the name of the class you want to find the methods of
        var methods = Java.use(className).class.getDeclaredMethods(); 
        methods.forEach(function(method) { 
            try { console.log("[-] " + method.toString()); } 
            catch(err) { console.log("[!] Exception1: " + err.message); } 
        }); 
    } 
    catch(err) { console.log("[!] Exception2: " + err.message); } 
} 
else { console.log("Java Runtime is not available!"); } 
console.log("[*] Completed: Find All Methods of a Specific Class");
