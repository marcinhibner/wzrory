'use strict';

AJAX – to kombinacja użycia technologii, która pozwala pobrać za pomocą JavaScript z serwera dane i umieścić je na stronie, bez ponownego przeładowania tej strony – czyli asynchronicznie. 

Sklada sie z technologii: 
•  JavaScript (objekt XMLHttpResponse) 
•  HTML 
•  CSS 
•  XML 
•  JSON



PROTOKÓŁ HTTP:
Pobieranie stron internetowych z serwerów opiera się o protokół HTTP. 
Przeglądarka wysyła do serwera żądanie. Serwer je przetwarza, po czym wysyła odpowiedź poprzedzoną kodem odpowiedzi (np. 404 - strona nie istnieje).
Standardowo każda przeglądarka pobiera zawartość całej strony internetowej z serwera i ją wyświetla
Korzystając z AJAX możemy zmienić tylko część strony, robiąc to bez przeładowania całej strony. Robimy to asynchronicznie od normalnego cyklu pobierania stron, więc użytkownik może dalej korzystać ze strony w tym czasie, a strona się nie przeładuje. 
 


Obiekt XMLHttpRequest:
Głównym zadaniem AJAX jest połączenie się z serwerem za pomocą obiektu XMLHttpRequest.

// definicja funkcji ajax
function ajax( method, url ) {
    
    // utworzenie obiektu
    var httpReq = new XMLHttpRequest();
    
    // otwarcie polaczenia - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open
    httpReq.open( method, url );
    
    // jesli status polaczenia zostal zmieniony -> httpReq.readyState
    // 0: połączenie nie nawiązane,
    // 1: połączenie nawiązane,
    // 2: żądanie odebrane,
    // 3: przetwarzanie,
    // 4: dane zwrócone i gotowe do użycia.
    
    httpReq.onreadystatechange = function() {
        
        // jeśli 4: dane zwrócone i gotowe do użycia
        if ( httpReq.readyState == 4 ) {
            
            // sprawdź kod statusu połączenia - https://pl.wikipedia.org/wiki/Kod_odpowiedzi_HTTP
            if ( httpReq.status == 200 ) {
                
                var returnData = httpReq.responseText;

                console.log(returnData);
                httpReq.onsuccess(returnData);
            
                // zeruj obiekt, aby nie utrzymywać nie potrzebnego już połączenia z serwerem
                httpReq = null;
            }
        }
    }
    
    httpReq.onsuccess = function(response) {
        var jsonObj = JSON.parse(response);
        console.log(jsonObj);
        console.log(jsonObj.userId);
        console.log(jsonObj.userId + ' ' + jsonObj.userName + ' ' + jsonObj.userURL);
    }

    // wysłanie danych do serwera
    httpReq.send();
}

// wywołujemy naszą funkcję ajax() :)    
ajax( "GET", "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl" );




Metody obiektu XMLHttpRequest():
•  open( method, url, async, user, password); - otwiera połączenie do serwera. Zazwyczaj korzystamy z 3 pierwszych atrybutów - metody (GET/ POST), adresu pliku na serwerze, oraz boolowskiej zmiennej określającej czy dane połączenie ma być asynchroniczne – w 99% przypadków jest to wartość true. Czasami wymagana jest autoryzacja, więc należy podać użytkownika i hasło. Ze względów bezpieczeństwa, możesz otwierać połączenie tylko ze swoją domeną. 
•  send("content"); - wysyła żądanie do serwera



Właściwości obiektu XMLHttpRequest(): 
 •  onreadystatechange – dopinamy funkcję, która obsłuży zdarzenie odpalane w chwili zmiany stanu danego połączenia 
 •  readyState - zawiera aktualny status połączenia (0: połączenie nie nawiązane, 1: połączenie nawiązane, 2: żądanie odebrane, 3: przetwarzanie, 4: dane zwrócone i gotowe do użycia) 
•  responseText - zawiera zwrócone dane w formie tekstu 
•  responseXML - zawiera zwrócone dane w formie drzewa XML (jeżeli zwrócone dane są prawidłowym dokumentem XML) 
•  status - zwraca status połączenia np. 200 – gdy wszystko jest OK i np. 404 - gdy strona nie istnieje, itp) 
•  statusText - zwraca status połączenia w formie tekstowej - np 404 zwróci: Not Found 



ODPOWIEDŹ responeText vs responeXML:
Po nawiązaniu połączenia i sprawdzeniu czy mamy poprawną odpowiedź z serwera, możemy pobrać przesłane dane i ich użyć.  
Zwrócone dane mogą być w formacie zwykłego tekstu responseText lub w formacie XML – responseXML 
Pierwszy format zawiera czysty tekst (często jest tam zapisany obiekt JSON), a drugi format zawiera prawidłowy dokument XML, który jest przerobiony na model DOM. Czyli można się po nim poruszać za pomocą znanych nam metod. 



AJAX ZA POMOCA jQUERY - OBIEKT JSON:
Pobieranie bezpośrednio obiektów JSON:

$.getJSON(  "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",         function (data) { 
    // wyswietl w konsoli         
    console.log(data);  
  } 
); 


AJAX ZA POMOCA JQUERY:

$.ajax({     
    url: "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",       dataType: "json",          
    success: function (resultJSON) {         
        console.log(resultJSON);     
    },          
    onerror: function (msg) {         
        console.log(msg);     } 
}); 
