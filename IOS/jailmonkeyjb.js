/**
Root detection bypass script for Gantix JailMoney
**/
const klass = ObjC.classes.JailMonkey;
Interceptor.attach(klass['- isJailBroken'].implementation, {
    onLeave: function (retval) {
        retval.replace(0);
    }
});
