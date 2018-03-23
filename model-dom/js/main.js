'use strict';

DOM:
jest to sposób reprezentacji złożonych dokumentów XML i HTML w postaci modelu obiektowego.

Dzięki niemu skrypty mają dynamiczny dostęp do dokumentu oraz mogą go aktualizować tzn. zmieniać style, treść i jego strukturę. 

DOM jest to standardowy interfejs umożliwiający dostęp i manipulację obiektami. 

DOM dzieli się na trzy części: 
•  CORE DOM – model dla wszystkich typów dokumentów; 
•  XML DOM – model dla dokumentów XML; 
•  HTML DOM – model dla dokumentów HTML. 
       Definiuje:
       •  elementy HTML jako obiekty; 
       •  właściwości wszystkich elementów HTML; 
       •  metody dostępu do wszystkich elementów HTML; 
       •  zdarzenia dla wszystkich elementów HTML.
HTML DOM definiuje jak uzyskać, zmieniać, dodawać lub usuwać elementy HTML. 

Gdy strona jest ładowana, przeglądarka tworzy model DOM. Jest to struktura drzewiasta. 



OBIEKT DOCUMENT:
reprezentuje całą stronę internetową.

Aby uzyskać dostęp do dowolnego elementu na stronie HTML, zawsze należy zacząć od dostępu do obiektu document.

Obiekt document zawiera właściwości i metody, które pozwalają uzyskać dostęp do wszystkich obiektów, z poziomu JavaScriptu.

document.documentElement - to główny element dokumentu (korzeń), czyli <html>. 
document.body - to obiekt reprezentujący <body> dokumentu, 
document.head - to obiekt reprezentujący <head> dokumentu. 

Obiekt document jest częścią obiektu window, a więc można uzyskać do niego dostęp poprzez window.document. 



ZNAJDOWANIE ELEMENTOW:
1.  za pomocą identyfikatora elementu - metoda getElementById; 
np. // pobierze element o id="parFirst" 
    var elementFirst = document.getElementById( "parFirst" ); 

2.  za pomocą nazwy klasy elementu - metoda getElementsByClassName; 
np. // pobierze wszystie element o class="link" 
    var elementsTable = document.getElementsByClassName( "link" );   

3.  za pomocą nazwy tagu elementu - metoda getElementsByTagName; 
np. // pobierze wszystkie elementy p 
    var allP = document.getElementsByTagName( "p" ); 

4.  za pomocą selektora CSS - metody querySelectorAll i querySelector. 
np. // pobierze wszystkie elementy o class="link"     
    var allLink = document.querySelectorAll( ".link" );       
    // pobierze pierwszy element o class="link" 
    var firstLink = document.querySelector( ".link" );




RELACJE MIEDZY WEZLAMI:
Elementy na stronie tworzą hierarchiczne drzewo – drzewo węzłów. 

Każdy element na stronie jest tak zwanym węzłem (ang. node) czyli pojedynczy węzeł.  Należą do nich: cały dokument, elementy, atrybuty, tekst oraz komentarze. 

W relacjach między nodami możemy mówić o: 
•  byciu rodzicem (parent) w stosunku do innego węzła; 
•  byciu rodzeństwem (sibling) dla innego węzła; 
•  byciu dzieckiem (child) w stosunku do innego węzłą. 

W drzewie modelu DOM, górny węzeł nazywa się root (korzeń główny, węzeł główny).
Każdy węzeł ma dokładnie jednego rodzica (parent node)
Węzły mogą posiadać dzieci (child nodes). 
Rodzeństwem (sibling node) są węzły na tym samym poziomie drzewa.

parentElement lub parentNode – zwraca rodzica danego węzła 
np. var elementParent = document.getElementById( "parFirst" ).parentNode; 
    console.log( elementParent ); 

childNodes – lista dzieci danego węzła - wszystkich
np. console.log( document.getElementById( "parFirst" ).childNodes ); 

childNodes[nodenumber] – dane dziecko danego węzła 
np. console.log( document.getElementById( "parFirst" ).childNodes[1] );

children – lista dzieci danego węzła – tylko jeśli są elementami HTML 
np. console.log( document.getElementById( "parFirst" ).children );

firstChild – pierwsze dziecko danego węzła 
np. console.log( document.getElementById( "parFirst" ).firstChild );

lastChild – ostanie dziecko danego węzła 
np. console.log( document.getElementById( "parFirst" ).lastChild );

previousSibling – poprzedni element danego węzła, który ma tego samego rodzica 
np. console.log( document.getElementById( "link" ).previousSibling ); 

nextSibling – następny element danego węzła, który ma tego samego rodzica 
np. console.log( document.getElementById( "link" ).nextSibling ); 

Wymienione powyżej właściwości np. childNodes, previousSibling, nextSibling pobierają wszystkie węzły łącznie z komentarzami oraz tekstem. Aby zobaczyć jakiego typu jest „node” można użyć właściwości nodeType. 
Własność ta zwraca typ danego węzła w postaci numeru: 
 •  1 – element HTML 
 •  2 – atrybut elementu 
 •  3 – tekst 
 •  8 – komentarz 
 •  9 – dokument 
 •  10 – dokument definicji 
 
 
 
TWORZENIE WEZLOW:
Do tworzenia nowych węzłów służą metody: 
•  document.createElement(typ) – tworzy element HTML 
np. var btn = document.createElement( "button" ); 

•  document.createTextNode(tekst) – tworzy tekst
np. var textBtn = document.createTextNode( "Click me" ); 

•  document.createAttribute(nazwa) – tworzy atrybut 
np. var classBtn = document.createAttribute( "class" ); 

•  document.createComment(tekst) – tworzy komentarz 
np. var comment = document.createComment( "To jest nowy komentarz" ); 




DODAWANIE WEZLOW DO MODELU DOM:
Możemy to zrobić za pomocą metod: 
•  appendChild(nowyWezel) – dodaje węzeł jako ostatnie dziecko danego węzła 
np. document.body.appendChild( btn ); // dodaj element do elementu <body> 
    btn.appendChild( textBtn ); // dodaj tekst do elementu <button> 

•  insertBefore(nowyWezel, istniejacyWezel) – dodaje węzeł przed innym dzieckiem danego węzła 

•  replaceChild(nowyWezel, istniejacyWezel) – zamień dziecko danego węzła na nowy węzeł 

•  setAttributeNode(nowyObiektAtrybut) – dodaje obiekt atrybutu do danego węzła 
np. btn.setAttributeNode( classAtr ); // dodaj atrybut class do elementu <button> 

•  setAttribute(nowyAtrybut, wartoscAtrybutu) – dodaje atrybut wraz z wartością tego atrybutu do danego węzła lub edytuje istniejący atrybut 
np. btn.setAttribute( "href" , "#" ); // dodaj nowy atrybut wraz z wartością do elementy <button>




USUWANIE WEZLOW:
Do usuwania elementów służą metody: 
•  removeChild(wezel) – usuwa dziecko danego węzła 
np. document.body.removeChild( btn ); 

•  removeAttribute(nazwaAtrybutu) – usuwa atrybut danego węzła 
np. btn.removeAttribute( "class" ); 

•  removeAttributeNode(atrybut) – usuwa atrybut danego węzła 



MANIPULACJA DOM - HTML i CSS:
-innerHTML – służy do pobierania i ustawiania kodu HTML w danym elemencie 
document.getElementById( "header" ).innerHTML = "Tekst do elementu"; 
 
-innerText – pobiera i ustawia tekst znajdujący się w element HTML (bez zagnieżdżonych elementów HTML) 
document.getElementById( "link" ).innerText = "Tekst do tagu"; 
 
-outerHTML – pobiera i ustawia kod HTML wraz z elementem HTML 
document.getElementById( "link" ).outerHTML; 


Możemy również pobrać i zmieniać/ustawić wartości atrybutów za pomocą następującej składni: 
document.getElementById( id ).attribute = nowaWartosc; 
np. document.getElementById( "link" ).href = ”https://akademia108.pl"; 


className – zwraca i ustawia/zmienia listę klas elementu 
document.getElementById( "link" ).classList; 
document.getElementById( "link" ).className = "btn btn-default";


Możemy także dodawać oraz ustawiać/zmieniać style CSS dla danego elementu za pomocą następującej składni: 
document.getElementById( id ).style.wlasnoscCSS = nowaWartosc; 
np. document.getElementById( "link" ).style.color = "red"; 



EVENTY:
to czynności, które użytkownik wykonuje podczas odwiedzania strony. 
Większość zdarzeń wywoływana jest przez użytkownika. Istnieją też zdarzenia, które nie są bezpośrednio spowodowane przez użytkownika. 
Za pomocą JavaScriptu można kontrolować eventy i na nie reagować. 
W języku JavaScript istnieje gotowy zestaw predefiniowanych zdarzeń.  
Korzystając z eventów musimy mieć pewność, że wszystkie elementy na stronie są załadowane. 

DOMContentLoaded - gwarantuje, że skrypt zacznie swoje działanie wtedy, gdy całe drzewo DOM zostanie już wczytane, a element, na którym pracujemy już istnieje. 
Ogolna konstrukcja:
document.addEventListener( "DOMContentLoaded", function() { 
// tutaj trafia skrypt operujący na elementach ze strony 
} ); 

callback - jest to tak zwana funkcja zwrotna. Jest ona uruchamiana po wystąpieniu jakiegoś zdarzenia (eventu).  
Eventy są budowane na tej funkcji. 

Eventy myszy:
click - zachodzi, gdy obiekt został kliknięty 
dblclick - zachodzi, gdy podwójnie klikniemy na obiekt 
mouseover - zachodzi, gdy kursor znalazł się na obiekcie 
mouseout - zachodzi, gdy kursor opuścił obiekt

Eventy klawiatury:
keydown - zachodzi, gdy klawisz na klawiaturze zostaje wciskany 
keyup - zachodzi podczas zwalniania klawisza na klawiaturze 
keypress - zachodzi, gdy klawisz klawiatury został wciśnięty 

Eventy dotykowe:
touchmove - zachodzi, gdy palec przemieszcza sie po ekranie dotykowym 
touchstart - zachodzi, gdy palec dotyka ekranu dotykowego 
touchedend - zachodzi podczas zabrania palca z ekranu dotykowego 

Eventy formularzy:
blur  - zachodzi, gdy dane pole formularza przestaje być aktywne 
change - zachodzi, gdy dane pole formularza ulega zmianie 
focus - zachodzi podczas uaktywnienia danego pola formularza 
submit - zachodzi podczas przesyłania formularza



OBSLUGA EVENTOW:
Aby zdarzenie było dostępne dla danego obiektu, należy je dla niego zarejestrować. 
Jest kilka sposobów obsługi zdarzeń: 
•  rejestrowanie zdarzenia bezpośrednio w kodzie HTML 
<a href="#" onclick="alert( ‘click' )"> kliknij </a>

•  przypisywanie zdarzeń przy użyciu HTML DOM 
function showText() {   
    console.log( ‘click' );  
} 
document.getElementById( "link" ).onclick = showText; 

•  rejestrowanie zdarzeń za pomocą metody addEventListener() 
function showText() {   
    console.log( ’click' );  
} 
 document.getElementById( "link" ).addEventListener( 'click', showText ); 
    


USUWANIE EVENTOW Z ELEMENTU:
Można to zrobić za pomocą metody removeEventListener() 
document.getElementById( "link" ).removeEventListener( 'click', showText ); 
    
//Nie da się usunąć eventów, które zostały dodane za pomocą funkcji anonimowych! Gdyż drugi paramet metody wymaga podania nazwy funkcji. 
    
    
    
ODCZYT WLASCIWOSCI EVENTU:
Javascript udostępnia nam specjalne właściwości, dzięki którym możemy bardziej dokładnie badać każde zarejestrowane zdarzenie.  
Aby odczytać właściwości zdarzenia musimy posłużyć się pseudo parametrem, który będziemy przekazywać do deklarowanej funkcji (na przykład parametr e). 
 
document.getElementById( "link" ).addEventListener( 'click', function(e){   
    if (!e) var e = window.event; // dla IE  
    console.log(e);  
//    console.log(e.type); - spr typu elementu
} ); 

    
    
WSTRZYMANIE DOMYSLNEJ AKCJI:
Większość elementów na stronie wykonuje domyślne akcje. 
Linki przenoszą w jakieś miejsca, formularz się wysyłają itp.  
Po podpięciu zdarzeń pod obiekt będą ono wywoływane na początku, jednak zaraz po nich wykonana zostanie domyślna czynność. 
Aby zapobiec wykonaniu się domyślnej czynności można skorzystać z metody preventDefault().

document.getElementById( "link" ).addEventListener( 'click', function(e){   
    if (!e) var e = window.event; // dla IE 
    e.preventDefault();    alert( 'Ten link nigdzie nie przeniesie!' );  
} ); 
    
    
    
ZATRZYMANIE NASLUCHU INNYCH ZDARZEN:
Po odpaleniu zdarzenia, domyślnie przechodzi ono po obiektach od dołu hierarchii do góry - dążąc do dokumentu. 
Aby przerwać tą wędrówkę oraz kolejne nasłuchy, można skorzystać z metody stopPropagation().

<div id="exampleDiv">  
    <a id="exampleLink" href="">Kliknij mnie</a> 
</div> 
 
document.getElementById( 'exampleDiv' ).addEventListener( 'click', function(e) {   
    alert( 'Kliknięto div' );  } );  
 
document.getElementById( 'exampleLink' ).addEventListener( 'click', function(e) {   
    /*   Bez dwóch poniższych linijek kliknięcie na link spowoduje  wyświetlenie komunikatu  "Kliknięto link", a następnie komunikatu "Kliknięto div". Dzięki dodaniu tych linijek kodu  wyświetli się tylko pierwszy komunikat.  */ 
    e.preventDefault(); 
    e.stopPropagation(); 
    alert( 'Kliknięto link' );  
} ); 