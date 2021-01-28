#include <stdio.h>
#include <windows.h>
#include <conio.h>
#include <stdlib.h>
#include <list>

using namespace std;

#define ARRIBA 72
#define IZQUIERDA 75
#define DERECHA 77
#define ABAJO 80

void gotoXY(int, int);
void ocultarCursor();
void pintarLimites();

class Nave
{
public:
	Nave(int x, int y, int corazones, int vidas);
	void pintar();
	void borrar();
	void mover();
	void pintar_corazones();
	void morir();
	int getX()
	{
		return x;
	}
	int getY()
	{
		return y;
	}
	int getVidas()
	{
		return vidas;
	}
	void COR()
	{
		corazones--;
	}

private:
	int x, y;
	int corazones;
	int vidas;
};

Nave::Nave(int x, int y, int corazones, int vidas)
{
	this->x = x;
	this->y = y;
	this->corazones = corazones;
	this->vidas = vidas;
}

void Nave::pintar()
{
	gotoXY(x, y);
	printf("  %c", 182);
	gotoXY(x, y + 1);
	printf(" %c%c%c", 40, 207, 41);
	gotoXY(x, y + 2);
	printf("%c%c %c%c", 182, 190, 190, 182);
}

void Nave::borrar()
{
	gotoXY(x, y);
	printf("        ");
	gotoXY(x, y + 1);
	printf("        ");
	gotoXY(x, y + 2);
	printf("        ");
}

void Nave::mover()
{
	if (kbhit())
	{
		char teclaPress = getch();
		borrar();
		if (teclaPress == IZQUIERDA && x > 3)
			x--;
		if (teclaPress == DERECHA && x + 6 < 77)
			x++;
		if (teclaPress == ARRIBA && y > 4)
			y--;
		if (teclaPress == ABAJO && y + 3 < 33)
			y++;
		if (teclaPress == 'e')
			corazones--;
		pintar();
		pintar_corazones();
	}
}

void Nave::pintar_corazones()
{
	gotoXY(50, 2);
	printf("VIDAS %d", vidas);

	gotoXY(64, 2);
	printf("Salud");

	gotoXY(70, 2);
	printf("     ");

	for (int i = 0; i < corazones; i++)
	{
		gotoXY(70 + i, 2);
		printf("%c", 3);
	}
}

void Nave::morir()
{
	if (corazones == 0)
	{
		borrar();
		//animacion muerte
		gotoXY(x, y);
		printf("  **   ");
		gotoXY(x, y + 1);
		printf(" ****  ");
		gotoXY(x, y + 2);
		printf("  **   ");
		Sleep(200);
		borrar();

		gotoXY(x, y);
		printf("* ** * ");
		gotoXY(x, y + 1);
		printf(" ****  ");
		gotoXY(x, y + 2);
		printf("* ** * ");
		Sleep(200);
		borrar();

		vidas--;
		corazones = 3;
		pintar_corazones();
		pintar();
	}
}

class Asteroide
{
public:
	Asteroide(int x, int y);
	void pintar();
	void mover();
	void choque(Nave &nave);
	int getX()
	{
		return x;
	}
	int getY()
	{
		return y;
	}

private:
	int x, y;
};

Asteroide::Asteroide(int x, int y)
{
	this->x = x;
	this->y = y;
}

void Asteroide::pintar()
{
	gotoXY(x, y);
	printf("%c", 184);
}

void Asteroide::mover()
{
	gotoXY(x, y);
	printf(" ");
	y++;
	if (y > 32)
	{
		x = (rand() % 71) + 4;
		y = 4;
	}
	pintar();
}

void Asteroide::choque(Nave &nave)
{
	if (x >= nave.getX() && x < nave.getX() + 6 && y >= nave.getY() && y <= nave.getY() + 2)
	{
		nave.COR();
		nave.borrar();
		nave.pintar();
		nave.pintar_corazones();
		//establecer nueva posicion al asteroide, se puede hacer funcion aparte
		x = (rand() % 71) + 4;
		y = 4;
	}
}

class Bala
{
public:
	Bala(int x, int y);
	void mover();
	bool fuera();
	int getX()
	{
		return x;
	}
	int getY()
	{
		return y;
	}

private:
	int x, y;
};

Bala::Bala(int x, int y)
{
	this->x = x;
	this->y = y;
}

void Bala::mover()
{
	gotoXY(x, y);
	printf(" ");

	//if (y > 4) //if omitido por implementacion de fuera()
	y--;

	gotoXY(x, y);
	printf("*");
}

bool Bala::fuera()
{
	if (y == 4)
		return true;
	return false;
}

int main()
{

	//establecer tamanio de la consola desde codigo 80x35
	system("MODE CON COLS=80 LINES=35");

	ocultarCursor();
	pintarLimites();

	Nave nave(37, 30, 3, 3);
	nave.pintar_corazones();
	nave.pintar();

	//Asteroide ast1(10, 4), ast2(4, 8), ast3(15, 10);
	list<Asteroide *> Asteroides;
	list<Asteroide *>::iterator itAst;
	for (int i = 0; i < 5; i++)
	{
		Asteroides.push_back(
			new Asteroide((rand() % 74) + 3, (rand() % 5) + 4));
	}

	list<Bala *> Balas;
	list<Bala *>::iterator it;

	bool gameOver = false;
	int puntos = 0;

	while (!gameOver)
	{
		gotoXY(4, 2);
		printf("Puntos %d", puntos);

		if (kbhit())
		{
			char tecla = getch();

			if (tecla == 'a')
				Balas.push_back(new Bala(nave.getX() + 2, nave.getY() - 1));
		}

		for (it = Balas.begin(); it != Balas.end(); it++)
		{
			(*it)->mover();
			if ((*it)->fuera())
			{
				gotoXY((*it)->getX(), (*it)->getY());
				printf(" ");
				delete (*it);
				it = Balas.erase(it);
			}
		}

		//nave.pintar_corazones();
		for (itAst = Asteroides.begin(); itAst != Asteroides.end(); itAst++)
		{
			(*itAst)->mover();
			(*itAst)->choque(nave);
		}

		for (itAst = Asteroides.begin(); itAst != Asteroides.end(); itAst++)
		{
			for (it = Balas.begin(); it != Balas.end(); it++)
			{
				if ((*itAst)->getX() == (*it)->getX() && ((*itAst)->getY() + 1 == (*it)->getY() || (*itAst)->getY() == (*it)->getY()))
				{
					//borramos bala
					gotoXY((*it)->getX(), (*it)->getY());
					printf(" ");
					delete (*it);
					it = Balas.erase(it);

					//borramos asteroide
					gotoXY((*itAst)->getX(), (*itAst)->getY());
					printf(" ");
					delete (*itAst);
					itAst = Asteroides.erase(itAst);

					//reponemos asteroide
					Asteroides.push_back(
						new Asteroide((rand() % 74) + 3, (rand() % 5) + 4));

					//aumentamos puntuacion
					puntos += 5;
				}
			}
		}

		nave.mover();
		nave.morir();

		if (nave.getVidas() == 0)
			gameOver = true;

		Sleep(30);
	}

	system("pause");
	return 0;
}

void gotoXY(int x, int y)
{
	HANDLE hConsole;
	hConsole = GetStdHandle(STD_OUTPUT_HANDLE);

	COORD dwPos;
	dwPos.X = x;
	dwPos.Y = y;

	SetConsoleCursorPosition(hConsole, dwPos);
}

//buscar forma mas sencilla de hacer
void ocultarCursor()
{
	HANDLE hConsole;
	hConsole = GetStdHandle(STD_OUTPUT_HANDLE);
	CONSOLE_CURSOR_INFO cci;
	cci.dwSize = 2;
	cci.bVisible = false;
	SetConsoleCursorInfo(hConsole, &cci);
}

void pintarLimites()
{
	for (int i = 2; i < 78; i++)
	{
		gotoXY(i, 3);
		printf("%c", 205);
		gotoXY(i, 33);
		printf("%c", 205);
	}

	for (int i = 4; i < 33; i++)
	{
		gotoXY(2, i);
		printf("%c", 186);
		gotoXY(77, i);
		printf("%c", 186);
	}

	gotoXY(2, 3);
	printf("%c", 201);

	gotoXY(2, 33);
	printf("%c", 200);

	gotoXY(77, 3);
	printf("%c", 187);

	gotoXY(77, 33);
	printf("%c", 188);
}