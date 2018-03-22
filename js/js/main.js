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
