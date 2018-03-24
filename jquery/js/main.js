'use strict';

jQuery to lekka biblioteka JavaScript, która znacznie upraszcza programowanie. 

Aby korzystać z biblioteki jQuery w projekcie należy najpierw dołączyć ją do niego:
•  ściągajac plik z biblioteką i dodać go lokalnie;
   Ze strony http://jquery.com/download/ i dolaczyc jak inne pliki js
v
•  odwołujac się do wersji znajdującej się w sieci za pomocą adresu url.
   Na stronie https://cdnjs.com/, wpisać jQuery i po wyszukaniu skopiować adres url. 
   (https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js)
    
jQuery zawsze podpinamy przed innymi plikami JS
    
    

DOCUMENT READY:
jQuery działa na strukturze DOM.  Aby mieć pewność, że dokument został w całości załadowany należy skorzystać z metody document.ready()
$( document ).ready( function() {    // lub samo function
 // kod do wykonania 
} ); 



ZNAK $ I SKŁADNIA ŁAŃCUCHOWA:
jQuery ma skladnie lancuchowa ktora zaczyna sie od $ a polecenia zaczynaja sie od kropki (.)
np. $( '#first' )  
    .css( { background : 'red' } )  
    .hide( 'slow' )  
    .show( 3000 );

Znak dolara($) jest skrótowym wywołaniem funkcji jQuery ktory zwraca obiekt jQuery dziedziczący po obiekcie DOM’u rozszerzający jego funkcje o możliwości jQuery. Funkcja ta przyjmuje za parametr string lub obiekt DOM’u. 
np. var jakisElement = $( "#idElementu" ); // identyczny efekt co: jQuery( "#idElementu" )  
    var jakisElement = document.getElementById( "idElementu" );  //czysty JS 



SELEKTORY:
służą do wskazania pojedynczego elementu lub kolekcji elementów w dokumencie HTML po jego nazwie, ID, klasie, typie atrybutów, wartości atrybutów itp.

-Selektor elementu - wybiera elementy na podstawie nazwy elementu. 
var allP = $( "p" ); 

-Selektor ID - wybiera elementy na podstawie atrybutu ID elementu. Aby znaleźć element o określonym id, należy przed id elementu HTML umieścić znak hash (#). 
var idElement = $( "#firstSection" ); 

-Selektor klasy - wybiera elementy o podanej nazwie klasy. Aby znaleźć elementy o określonej klasie, należy przed nazwą klasy elementu HTML umieścić znak kropki (.). 
var allGreen = $( ".green" ); 

-inne selektory:
var allElements = $( "*" );    // wszystkie elementy na stronie 
var thisElement = $( this );   // bieżący element HTML 
var elementClass = $( "p.green" );  // wszystkie elementy p z class="green" 
var elementFirst = $( "p:first" );   // pierwszy element p 
var elementsAttr = $( "[href]" );  // wszystkie elementy z atrybutem href 
var elementsTitle = $( "[title='Image']" ); // wszystkie elementy z atrybutem title='Image' 



EDYCJA HTML i CSS:
Dzięki jQuery można w łatwy sposób manipulować HTML i CSS zmieniajac zawartość dowolnego elementu, dodawać w wybranym przez nas miejscu fragment kodu html, kopiować elementy i dowolnie manipulować obiektami na stronie. 

-Metoda text(): 
$( selektor ).text();  // zwraca zawartość tekstową ze wszystkich dopasowanych selektorów 
$( selektor ).text( "tekst" ); // ustawia tekst we wszystkich dopasowanych selektorach 
np. $( "p" ).text( "Hello world!" ); 

-Metoda html(): 
$( selektor ).html();    // zwraca zawartość z pierwszego dopasowanego selektora 
$( selektor ).html( "kodHTML" ); // ustawia kod HTML we wszystkich dopasowanych selektorach 
np. $( "p" ).html( "Hello <b>world</b>!" ); 

-Metody dodające nową treść: 
append() - wstaw zawartość na końcu wybranego selektora 
prepend() - wstaw zawartość na początku wybranego selektora 
after() - wstaw zawartość za wybranym selektorem 
before() - wstaw zawartość przed wybranym selektorem 
np. $( "p.green" ).append( "Hello world!" ); 

-Metody usuwające treść i elementy: 
remove() - usuwa wybrany element i elementy znajdujące się wewnątrz tego elementu 
empty() - usuwa elementy znajdujące się wewnątrz wybranego elementu 
np. $( "p" ).empty(); 

-Metoda css(): 
$( selektor ).css( "wlasnoscCSS" );  // zwraca określoną własność CSS z pierwszego dopasowanego selektora 
$( selektor ).css( "wlasnoscCSS", "wartosc" ); // ustawia własność CSS we wszystkich dopasowanych selektorach 
np. $( "p" ).css( "color" ); // zwróci kolor tekstu pierwszego elementu p 
    $( "p" ).css( "color", "red" );  // ustawi kolor tekstu wszystkim elementom p 

-Metoda val(): 
$( selektor ).val();  // zwraca wartość z pierwszego dopasowanego pola formularza 
$( selektor ).val( "tekst" ); // ustawia wartość do wszystkich dopasowanych pól formularza 
np. $( "input#name" ).val();  
    $( "input#email" ).val( "name@gmail.com" );  

-Metody dodające i usuwające klasy: 
addClass();  // dodaje jedną lub więcej klas do wybranego elementu 
removeClass(); // usuwa jedną lub więcej klas z wybranego elementu 
np. $( "div" ).addClass( "important" );  
    $( "p" ).removeClass( "green", "important" );  



PORUSZANIE SIE PO DOM:
-Metoda find() zwraca elementy potomne wybranego elementu. Metoda przechodzi całe drzewo HTML od góry do dołu i wyszukuje odpowiednie elementy. 
Metoda posiada wymagany parametr, który mówi jakich potomków danego elementu wyszukać. 
Ogólna konstrukcja: 
$( selector ).find( filter ); 
np. $( "div" ).find( ".first" ).css( { "color": "red", "border-color": "red" } ); czyli
Znajdź potomków elementu <div> o class= "first" i nadaj im kolor tekstu i kolor obramowania czerwony.

-Metoda each() określa funkcję, która ma być uruchomiona dla wszystkich znalezionych elementów. 
Funkcja wymaga parametru w postaci funkcji, która ma być uruchomiona dla znalezionych elementów. 
Ogólna konstrukcja: 
$( selector ).each( function() {  
    // kod do wykonania 
} ); 
np. $( "button" ).click( function() {     
    $( "li" ).each( function() {         
        console.log( $( this ).text() );     
    } ); 
} ); czyli 
Po kliknięciu na element <button> uruchamiana jest funkcja dla wszystkich elementów <li>, która wypisuje w konsoli tekst znajdujący się w elementach <li>. 




ZDARZENIA JQUERY:
Większość zdarzeń DOM ma równoważną metodę jQuery. 
Aby skorzystać ze zdarzenia w jQuery wystarczy przypiąć zdarzenie do pobranego obiektu korzystając z metody będącej nazwą danego zdarzenia. 
np. $( 'a.guzik' ).click( function() {     
    console.log( 'Guzik został naciśnięty.' ); 
} ); 
lub 
$( 'a.guzik' ).on( 'click', function() {   
    console.log( 'Guzik został naciśnięty.' );  
} ); 

Podpinanie kilku zdarzeń: 
np. $( 'a.guzik' ).on( {   
    'click': function() {      
    // kod do wykonania  
    },   
    'mouseover':  function() { 
    // kod do wykonania  
    } 
} ); 

Wybrane zdarzenia jQuery: 
-click() - gdy użytkownik kliknie na wskazany element  
-dblclick() - gdy użytkownik dwukrotnie kliknie na wskazany element 
-mouseenter() - gdy wskaźnik myszy wejdzie na wskazany element 
-mouseleave() - gdy wskaźnik myszy opuści wskazany element 
-resize() - gdy zmieniany jest rozmiar wskazanego elementu 
-load() - gdy wybrany element jest ładowany 
-scroll() - gdy użytkownik skroluje wskazany element 
-submit() - gdy formularz jest wysyłany  



ANIMACJE JQUERY:
Za pomocą jQuery można wykonywać animacje na elementach.  

-Za pomocą metod hide() i show() można ukrywać i pokazywać elementy. 
Obie metody mogą przyjmować dwa parametry. Pierwszym z nich jest prędkość ukrywania/pojawiania się elementu.  
Drugim jest funkcja, która jest wykonywana gdy metody się zakończyły. 

$( "#hide" ).click( function() {     
    $( "p" ).hide( "slow" ); 
} ); 
 
$( "#show" ).click( function() {     
    $( "p" ).show( "fast" ); 
} ); 

-Za pomocą metody fadeIn() i fadeOut() można płynnie pokazywać i ukrywać elementy na stronie. Metody te przyjmują takie same parametry ja metody show() i hide(). 

$( "#hide" ).click( function() {     
    $( "p" ).fadeOut( "slow" ); 
} ); 
 
$( "#show" ).click( function() {     
    $( "p" ).fadeIn( "fast" ); 
} ); 

-Za pomocą metody slideUp() i slideDown() można płynnie zwijać elementy w górę i rozwijać w dół. Metody te przyjmują takie same parametry ja metody wymienione wcześniej. 
 
$( "#hide" ).click( function() {     
    $( "p" ).slideDown( "slow" ); 
} ); 
 
$( "#show" ).click( function() {     
    $( "p" ).slideUp( "fast" ); 
} ); 

-W jQuery można tworzyć niestandardowe animacje. 
 Ogólna konstrukcja: 
 
$( selector ).animate( { params }, speed, callback ); 
 
params - właściwości CSS, które mają być animowane 
speed - szybkość animacji 
callback - funkcja która wykona się po zakończeniu animacji 

np. $( "button" ).click( function() {  
    $( "div" ).animate( { left: '250px' } ); 
} );  
 
$( "button" ).click( function() {  
    $( "div" ).animate( {   
        left: '250px',   
        opacity: '0.5',   
        height: '150px'  
    } ); 
} );  
 
$( "button" ).click( function() {   
    $( "div" ).animate( { left: '100px' }, "slow" );   
    $( "div" ).animate( { fontSize: '3em' }, "slow" ); 
} ); 