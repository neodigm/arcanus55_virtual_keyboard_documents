'use strict';
var nNextSnck = 0;

function nextSnck(){
  var aMsg = ["Secret Now. Forever Secret","Can you keep a Secret?","Secure and Endure","There is no Privacy|There is only Secrecy"];
  snck.q( aMsg[ nNextSnck++ ]);
}
         
setTimeout(nextSnck, 17600);
setTimeout(nextSnck, 680000);
setTimeout(nextSnck, 148000);
setTimeout(nextSnck, 84000);
