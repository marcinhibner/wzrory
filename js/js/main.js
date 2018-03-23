'use strict';

RODZAJE KOMENTARZY:
/*
komentarze blokowe
*/

//komentarze liniowe



ZMIENNE:
Zmienne to coś w rodzaju „komórek pamięci”, w których można przechowywać dane. 

Zmienna posiada nazwę, dzięki której można się do niej odwołać w kodzie skryptu oraz typ, który określa jakie dane może przechowywać. 

Zmienne tworzone są za pomocą słowa kluczowego var, po którym następuje nazwa zmiennej

Zmiennej można przypisać wartość za pomocą operatora przypisania czyli znaku = 
np.  var liczba = 10; 

Nazewnictwo: camelCase, bez spacji, polskich liter i cyfr.



FUNKCJE:
Funkcje to wydzielone bloki kodu przeznaczone do wykonywania konkretnych zadań. 

Tworzy się je przy użyciu słowa kluczowego function. 

Tworzenie funkcji zwiększa przejrzystość kodu i ułatwia programowanie oraz pozwala wielokrotnie wykonywać ten sam zestaw instrukcji bez konieczności każdorazowego pisania tego samego kodu. 

Funkcja jest wywoływana przez inną część skryptu, a w momencie jej wywołania zostaje wykonywany kod w niej zawarty.  

Ogólna deklaracja funkcji jest w postaci: 
 
function nazwaFunkcji() { 
 
 // kod funkcji 
 
} nazwaFunkcji(); // wywołanie funkcji 

nazwaFunkcji – dowolna nazwa która powinna spełniać takie same wymogi jak nazwy zmiennych 

Funkcję możemy stworzyć także za pomocą wyrażenia. Jest to tak zwana anonimowa funkcja (czyli taką, która nie ma nazwy), którą od razu podstawiamy pod zmienna: 
 
var nazwaFunkcji = function() { 
 
 // kod funkcji anonimowej 
    
} nazwaFunkcji(); // wywołanie funkcji 

Funkcje moga przekazywać parametry (argumenty), czyli wartości (dane), które mogą wpływać na działanie funkcji lub też być przez funkcję przetwarzane. 
np. function nazwaFunkcji( parametr1, parametr2, parametr3 ) {
}
nazwaFunkcji( wartoscParametru1, wartoscParametru2, wartoscParametru3 );    

Funkcja po zakończeniu działania zwraca jakąś wartość

Dzięki zastosowaniu instrukcji return możemy nakazać funkcji zwracanie określonej wartości

Instrukcja ta równocześnie przerywa dalsze działanie funkcji i powoduje zwrócenie wartości występującej po return ktora mozna wykorzystac w dalszej czesci skryptu

Uzycie return bez argumentu przerywa dzialanie funkcji bez zwrocenia wartosci.



ZASIEG ZMIENNYCH:
Zmienne globalne - są dostępne dla całego skryptu tzn. dla wszystkich funkcji, metod, operacji jaki wykonujemy w skrypcie. 
 
Zmienne lokalne - są dostępne tylko np. we wnętrzu danej funkcji. 



TYPY DANYCH:
Typy proste służą do zapisywania prostych danych takich jak: 
-liczby - typ liczbowy (number) - zapis liczb całkowitych i ułamkowych, np. 0, 1, -2, 3.0, 3.14
    np. var liczba = 10; 

-łańcuchów znaków (tekstu) - typ łańcuchowy (string) - Wartość tego typu jest sekwencją zera lub więcej znaków umieszczonych pomiędzy dwoma cudzysłowami lub apostrofami
    np. var zdanie = "Ola ma kota"; 
Ciąg może zawierać sekwencje specjalne: 
- \n - nowy wiersz   
- \” - cudzysłów 
- \’ - apostrof 
- \\ - lewy ukośnik 

-wartości prawda/fałsz - typ logiczny (boolean) - Pozwala na określenie dwóch wartości logicznych: prawda (true) i fałsz (false).
    np. var varBol = true; 
    
-null i undefined - typy specjalne - Typ undefined oznacza po prostu typ niezdefiniowany. Jest on używany zarówno do oznaczenia braku wartości jak i wartości niezdefiniowanej. 
null, oznacza nic, pomyślany raczej jako wyznacznik braku referencji do obiektu. W praktyce, z null spotkamy się używając funkcji wyszukujących element w dokumencie.
    

Typy referencyjne służą do zapisywania złożonych obiektów np. obiekty, tablice

Wartością zmiennych, które są typu referencyjnego jest adres wskazujący na miejsce, w pamięci, w którym znajdują się dane obiektu - zmienne nie mają przypisanej bezpośrednio wartości, a tylko wskazują na miejsce w pamięci, gdzie te dane są przetrzymywane. 



TABLICE:
Tablice są to struktury danych pozwalające na przechowywanie uporządkowanego zbioru elementów.

Odczyt zawartości danej komórki osiągamy poprzez podanie jej indeksu w nawiasie kwadratowym
np. kolory[ 2 ]; 

Tablice są indeksowane od 0, tak więc pierwszy element tablicy ma index - 0, drugi - 1

Aby dodać nową wartość do tablicy po prostu ustawiamy nową wartość w odpowiednim indeksie tablicy lub korzystamy z metody push(), która dodaje nową wartość na końcu tablicy i zwraca jej długość.
np. var imiona = [ 'Marcin', 'Ania', 'Agnieszka' ]; //stwórz tablicę 
    imiona[3] = ’Piotrek';      //dodaj wartość do tablicy 
v
    imiona.push( 'Piotrek' );
console.log( imiona[3] );    //wypisze Piotrek 

Metoda pop() usuwa ostatni element z tablicy po czym go zwraca.

Metoda unshift() wstawia nowy element do tablicy na jej początku, po czym zwraca nową długość tablicy. 

Metoda shift() usuwa pierwszy element z tablicy i go zwraca.

Każda tablica udostępnia nam właściwość length, dzięki której można określić długość tablicy (ilość elementów). console.log( imiona.length );

Metoda join() służy do łączenia kolejnych elementów w jeden tekst.  
 
Opcjonalnym parametrem tej metody jest znak, który będzie oddzielał kolejne elementy w utworzonym tekście. Jeżeli go nie podamy będzie użyty domyślny znak przecinka. 
np. var imiona = [ 'Marcin', 'Ania', 'Agnieszka' ]; 
    console.log( imiona.join() );     // wypisze się "Marcin,Ania,Agnieszka"  
    console.log( imiona.join( " - " ) );  
    console.log( imiona.join( " + " ) ); 

Dzięki metodzie reverse() można odwrócić elementy tablicy

Metoda sort() służy do alfabetycznego sortowania tablicy. 




OBIEKTY:
Każda wartość w tablicy ma swój index (klucz, numer porządkowy), dzięki któremu możesz się do niej odnieść. 
Obiekt w JavaScript jest czymś „podobnym” do tablicy. Różnica polega na tym, że to my tworzymy klucze. Nie jesteśmy ograniczeni wyłącznie do kluczy numerycznych.

np. var osoba = {     
    name: "Marcin",                                  // właściwość obiektu     
    height: 184,     
    print : function() { console.log( this.name ); } // metoda obiektu }
}

Obiekt może posiadać metody, są to działania które mogą być wykonywane na obiektach. Metody są to wewnętrzne funkcje przechowywane we właściwościach obiektów. 

Dostęp do właściwości obiektu: 
nazwaObiektu.kluczWlasnosci;
np. osoba.name;

Dostęp do metod obiektu: 
nazwaObiektu.nazwaMetody(); 
np. osoba.print(); 

Aby odwołać się do danego obiektu z jego wnętrza stosujemy instrukcję this, np. this.name;

Dodawanie właściwości: 
np. osoba.weight = 73;                   // dodawanie własności 
    osoba.printDetail = function() {     // dodawanie metody
        

        
KLASY:
W sytuacji, gdy chcemy utworzyć kilka obiektów, które mają określone właściwości i metody to wykorzystamy do tego tak zwaną klasę obiektu. 

Klasa to „szablon”, który definiuje jak będą wyglądać i jak będą się zachowywać tworzone w oparciu o nią obiekty. 
Klasę definiujemy za pomocą słowa kluczowego class v wykorzystujemy słowo kluczowe function.
Do słowa class potrzebny jest także constructor(). 
Pojedynczy obiekt stworzony na podstawie klasy, to instancja klasy. 

np. class Osoba {                       //tworzymy klase obiektu osoba
    constructor(imie, nazwisko) {         
        this.imie = imie;                 
        this.nazwisko = nazwisko;          
    } 
     wyswietlInfo() {                     
         console.log( "Imię: " + this.imie + ",  " + "Nazwisko: " + this.nazwisko);     
     }  
}

var krystian = new Osoba('Krystian', 'Dziopa');  // stwórz nową instancję obiektu Osoba 
krystian.wyswietlInfo();                         //Wypisze „Imię: Krystian, Nazwisko: Dziopa 
        
        
        
OBIEKT MATH:
Obiekt Math zawiera stałe matematyczne oraz metody pozwalające na wykonywanie różnych operacji matematycznych, takich jak pierwiastkowanie, potęgowanie itp.  
 
Jest to obiekt wbudowany, co oznacza, że można z niego korzystać bezpośrednio bez wywoływania nowej instancji. 

Stałe matematyczne dostępne dzięki obiektowi Math:
np. -Math.E   - zwraca stałą Eulera, która wynosi ok. 2.71  
    -Math.LN10  - zwraca logarytm z dziesięciu, tj. ok. 2.30  
    -Math.PI   - zwraca wartość liczby Pi, czyli ok. 3.14  
    -Math.SQRT2 - zwraca pierwiastek kwadratowy z 2, czyli ok. 1.41 
    -Math.cos( ilosc-stopni ) - zwraca cosinus  
    -Math.pow( podstawa , wykladnik ) - zwraca liczbę podniesioną do potęgi 
    -Math.rondom( ) - zwraca przypadkową liczbę z zakresu od 0 do 1 
        
console.log( "PI = " + Math.PI ); 
console.log( ”cos(0) = " + Math.cos(0) ); 
            

        
OPERATORY:
Na zmiennych można wykonywać róże operacje za pomocą operatorów.
•  arytmetyczne:
   *   -  mnozenie
   /   -  dzielenie
   +   -  dodawanie
   -   -  odejmowanie
   %   -  dzielenie modulo (reszta z dzielenia)
   ++  -  inkrementacja (zwiększanie)
   --  -  dekrementacja (zmniejszanie)      
        
•  porównania: (powodują przypisanie wartości argumentu znajdującego się z prawej strony operatora argumentowi znajdującemu się z lewej strony.)
   =   -  przypisanie wartości 
   +=  -  przypisanie argumentowi umieszczonemu z lewej strony wartość wynikającej z dodawania argumentu znajdującego się z lewej strony i argumentu znajdującego się z prawej strony operatora 
   -=  -  jw - ...wartosci wynikajacej z odejmowania argumentu...
   *=  -  jw - ...wartosci wynikajacej z pomnozenia argumentu... 
   /=  -  jw - ...wartosci wynikajacej z podzielenia argumentu...
   %=  -  jw - ...wartosci wynikajacej z dzielenia modulo argumentu...     
        
•  przypisania: ( służą do porównywania argumentów. Wynikiem ich działania jest wartość logiczna true lub false, czyli prawda lub fałsz. )
   ==  -  rowne
   !=  -  rozne
   === -  rowna wartosc i ten sam typ danych
   !== -  rozne i inny typ danych
   >   -  wieksze od
   <   -  mniejsze od 
   >=  -  wieksze badz rowne od
   <=  -  mniejsze badz rowne od 
        
•  logiczne: ( za pomocą operatorów logicznych możemy łączyć kilka porównań w jedną całość. Można je wykonywać na argumentach, które posiadają wartość logiczną: prawda lub fałsz. )
        
    iloczyn logiczny (and) - && - Wynikiem iloczynu logicznego jest wartość true, wtedy i tylko wtedy, kiedy oba argumenty mają wartość true. W każdym innym przypadku wynikiem jest false. 
    
    suma logiczna (or) - || - Wynikiem sumy logicznej jest wartość false, wtedy i tylko wtedy, kiedy oba argumenty mają wartość false. W każdym innym przypadku wynikiem jest true. 
        
    negacja logiczna (not) - ! - Zmieniamy wynik operacji logicznej na przeciwną. Czyli jeśli argument miał wartość true, będzie miał wartość false, i odwrotnie, jeśli miał wartość false, będzie miał wartość true. 
        
•  warunkowe: ( (ternary) pozwala na ustalenie wartości wyrażenia w zależności od prawdziwości danego warunku. 
Ma on postać: warunek ? wyrazenie1 : wyrazenie2 - która oznacza: jeśli warunek jest prawdziwy, podstaw za wartość całego wyrażenia wartość1, a w przeciwnym razie za wartość wyrażenia podstaw wartość2
np. var liczba = 100; 
    var wynik = ( liczba < 0 ) ? -1 : 1; 
    console.log( wynik ); // wynik = 1 )
        

        
INSTRUKCJE WARUNKOWE:
Instrukcja warunkowa wykonuje wybrany kod, w zależności czy wartość danego wyrażenia jest prawdą (true) czy fałszem (false). 
Instrukcje warunkowe mogą być zagnieżdżane. 

•  if : 
if ( warunek ) { 
 // instrukcje do wykonania jeśli warunek jest spełniony 
}
Instrukcja if sprawdza dany warunek, i w zależności od tego czy zwróci true lub false wykona lub nie wykona sekcję kodu zawartą w klamrach.
np. var x = 1; 
    if ( x == 1 ) { 
    console.log( 'Liczba równa się 1' ); 
} 
    
•  if-else : 
Poprzez dodanie do instrukcji if bloku else możemy sprawdzić przeciwieństwo warunku if 
if ( warunek ) { 
 // instrukcje do wykonania jeśli warunek jest spełniony 
} else { 
 // instrukcje do wykonania jeśli warunek nie jest spełniony 
} 
np. var liczba = -1; if ( liczba < 0 ) { 
    console.log ( "Wartość zmiennej liczba jest mniejsza od 0." ); 
} else { 
    console.log ( "Wartość zmiennej liczba nie jest mniejsza od 0." ); 
} 

•  else if :
Trzecia wersja instrukcji if pozwala na badanie wielu warunków. Po bloku if może wystąpić wiele dodatkowych bloków else if  
if ( warunek1 ) { 
 // instrukcje1 
} else if ( warunek2 ) { 
 // instrukcje2 
} ... else if ( warunekN ) { 
 // instrukcjeN 
} else {  
 // instrukcjeM 
-  Jeżeli żaden z warunków nie będzie prawdziwy, to zostaną wykonane instrukcjeM. Ostatni blok else jest jednak opcjonalny i nie musi być stosowany. 

•  switch :
Instrukcja switch pozwala w wygodny sposób sprawdzić ciąg warunków i wykonać różne instrukcje w zależności od wyników porównywania. 
switch ( wyrażenie ) { 
    case przypadek1:   // fragment wykonywany gdy rezultat wyrażenia jest równy rezultat1 - potrzebuje break;  
    break; 
 
    case przypadek2:   // fragment wykonywany gdy rezultat wyrażenia jest równy rezultat2 - potrzebuje break;  
    break; 
    … 
    default:   //fragment wykonywany gdy powyższe rezultaty nie są równe rezultatowi wyrażenia 
} 
 czyli: sprawdź wartość wyrażenia (wyrażenie), jeśli wynikiem jest wartość1, to wykonaj intrukcje1 i przerwij wykonywanie bloku switch (przerwanie jest wykonywane przez instrukcję break); 
 jeśli wynikiem jest wartość2, to wykonaj intrukcje2 itd. 
 -jeśli nie zachodzi żaden z wymienionych przypadków, wykonaj instrukcje3 i zakończ blok switch 
 -blok default jest jednak opcjonalny i może zostać pominięty. 
     
     
     
PETLE:
Pętle w programowaniu pozwalają nam wykonywać dany kod pewną ilość razy. 
Petle mozemy zagniezdzac.

- Petla for:
for ( wyrażenie początkowe ; wyrażenie warunkowe ; wyrażenie modyfikujące ) {  
        // instrukcje do wykonania 
}   
wyrażenie początkowe jest stosowane do zainicjalizowania zmiennej używanej jako licznik liczby wykonań pętli  
wyrażenie warunkowe określa warunek, jaki musi być spełniony, aby dokonać kolejnego przejścia w pętli 
wyrażenie modyfikujące jest zwykle używane do modyfikacji zmiennej będącej licznikiem

- Petla forEach -
np. var tablica = [ ”Krystian”,  ”Monika”,  ”Danuta” ]; 
    tablica.forEach( function( element, index ) {      
    console.log( ”Element z Indexem: ” + index + ” ma wartość ” + element ); 
    });
    
element - jest wartością elementu tablicy 
index - jest indexem elementu tablicy

- Petla while - służy, podobnie jak for, do wykonywania powtarzających się czynności.  
Pętlę for najczęściej wykorzystuje się, kiedy liczba powtarzanych operacji jest znana, natomiast pętlę while, kiedy liczby powtórzeń nie znamy, a zakończenie pętli jest uzależnione od spełnienia pewnego warunku. 
while ( warunek ) {  
    // instrukcje
}
Fragment kodu będzie powtarzany dopóki będzie spełniony warunek testowany w nawiasach.  

- Petla do...while - jest podobna do petli while ale zasadniczą różnicą między tymi pętlami jest to, że w pętli do…while kod, który ma być powtarzany zostanie wykonany przed sprawdzeniem wyrażenia. Instrukcje z wnętrza pętli do…while są wykonywane zawsze przynajmniej jeden raz, nawet jeśli warunek będzie fałszywy. 
do { 
 // instrukcje 
} while( warunek ); 


Przerywanie petli - Działanie każdej z pętli może być przerwane w dowolnym momencie za pomocą instrukcji break. Jeśli zatem break pojawi się wewnątrz pętli, zakończy ona swoje działanie. 
np. var i = 0; 
    while( true ) { 
 /* pętla while wykonywała by się w nieskończoność (ponieważ warunek tej pętli był by  zawsze prawdziwy), gdyby nie znajdująca się wewnątrz instrukcja break (dzięki czemu  pętla będzie wykonywana dopóki wartość zmiennej i nie osiągnie co najmniej wartości 9) */    
    console.log ( "napis [i = " + i + "] " ); 
    if ( i++ >= 9 ) { break }; 
}
    
    
Kontynuacja petli - Instrukcja continue powoduje przejście do jej kolejnej iteracji. Jeśli zatem wewnątrz pętli znajdzie się instrukcja continue, bieżąca iteracja (przebieg) zostanie przerwana oraz rozpocznie się kolejna (chyba że bieżąca iteracja była ostatnią).
np. for( var i = 1 ;  i <= 20 ;  i++ ) { 
    if ( i % 2 != 0 ) { continue };  
    /* jeśli wartość zmiennej i nie jest podzielna przez dwa to przejdź do kolejnej iteracji   jeśli jest podzielna przez dwa to wypisz tą iterację */  
    console.log ( i + " " ); 
} 
Jest to pętla for, która wyświetla liczby całkowite z zakresu 1 – 20 podzielne przez 2. 
    
    
    
JSON
Jest formatem do przechowywania i wymiany danych. Jest używany gdy dane są przesyłane z serwera np. na stronę internetową.  jest formatem tekstowym, bazującym na podzbiorze języka JavaScript. 
Jest formatem niezależnym od konkretnego języka. Wiele języków programowania obsługuje ten format danych przez dodatkowe pakiety bądź biblioteki. 
Format JSON jest składniowo identyczny z kodem do tworzenia obiektów JavaScript.
•  dane to pary nazwa-wartość 
•  dane są oddzielone przecinkami 
•  w klamrach zawarty jest obiekt 
•  w nawiasach kwadratowych jest tablica obiektów mających te same właściwości 
np. { 
    "employees”: [      
                 {"firstName": "John", "lastName": "Doe"},       
                 {"firstName": "Anna", "lastName": "Smith"},      
                 {"firstName": "Peter", "lastName": "Jones"}    
                 ] 
}