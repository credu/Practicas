#pragma once

namespace Calculadora {

	using namespace System;
	using namespace System::ComponentModel;
	using namespace System::Collections;
	using namespace System::Windows::Forms;
	using namespace System::Data;
	using namespace System::Drawing;

	/// <summary>
	/// Summary for Main
	/// </summary>
	public ref class Main : public System::Windows::Forms::Form
	{
	public:
		Main(void)
		{
			InitializeComponent();
			//
			//TODO: Add the constructor code here
			//
		}

	protected:
		/// <summary>
		/// Clean up any resources being used.
		/// </summary>
		~Main()
		{
			if (components)
			{
				delete components;
			}
		}
	private: System::Windows::Forms::Button^ ac;
	protected:

	private: System::Windows::Forms::TextBox^ textBox1;
	private: System::Windows::Forms::Button^ del;

	private: System::Windows::Forms::Button^ porcentaje;

	private: System::Windows::Forms::Button^ division;

	private: System::Windows::Forms::Button^ multiplicacion;
	private: System::Windows::Forms::Button^ button9;




	private: System::Windows::Forms::Button^ button8;

	private: System::Windows::Forms::Button^ button7;
	private: System::Windows::Forms::Button^ menos;
	private: System::Windows::Forms::Button^ button6;
	private: System::Windows::Forms::Button^ button5;
	private: System::Windows::Forms::Button^ button4;




	private: System::Windows::Forms::Button^ mas;
	private: System::Windows::Forms::Button^ button3;


	private: System::Windows::Forms::Button^ button2;

	private: System::Windows::Forms::Button^ button1;

	private: System::Windows::Forms::Button^ igual;

	private: System::Windows::Forms::Button^ punto;
	private: System::Windows::Forms::Button^ button0;


	private: System::Windows::Forms::Button^ ans;

	protected:

	protected:

	private:
		/// <summary>
		/// Required designer variable.
		/// </summary>
		System::ComponentModel::Container ^components;

#pragma region Windows Form Designer generated code
		/// <summary>
		/// Required method for Designer support - do not modify
		/// the contents of this method with the code editor.
		/// </summary>
		void InitializeComponent(void)
		{
			System::ComponentModel::ComponentResourceManager^ resources = (gcnew System::ComponentModel::ComponentResourceManager(Main::typeid));
			this->ac = (gcnew System::Windows::Forms::Button());
			this->textBox1 = (gcnew System::Windows::Forms::TextBox());
			this->del = (gcnew System::Windows::Forms::Button());
			this->porcentaje = (gcnew System::Windows::Forms::Button());
			this->division = (gcnew System::Windows::Forms::Button());
			this->multiplicacion = (gcnew System::Windows::Forms::Button());
			this->button9 = (gcnew System::Windows::Forms::Button());
			this->button8 = (gcnew System::Windows::Forms::Button());
			this->button7 = (gcnew System::Windows::Forms::Button());
			this->menos = (gcnew System::Windows::Forms::Button());
			this->button6 = (gcnew System::Windows::Forms::Button());
			this->button5 = (gcnew System::Windows::Forms::Button());
			this->button4 = (gcnew System::Windows::Forms::Button());
			this->mas = (gcnew System::Windows::Forms::Button());
			this->button3 = (gcnew System::Windows::Forms::Button());
			this->button2 = (gcnew System::Windows::Forms::Button());
			this->button1 = (gcnew System::Windows::Forms::Button());
			this->igual = (gcnew System::Windows::Forms::Button());
			this->punto = (gcnew System::Windows::Forms::Button());
			this->button0 = (gcnew System::Windows::Forms::Button());
			this->ans = (gcnew System::Windows::Forms::Button());
			this->SuspendLayout();
			// 
			// ac
			// 
			this->ac->BackColor = System::Drawing::Color::White;
			this->ac->FlatAppearance->BorderSize = 0;
			this->ac->FlatStyle = System::Windows::Forms::FlatStyle::Flat;
			this->ac->Font = (gcnew System::Drawing::Font(L"Microsoft Sans Serif", 30));
			this->ac->Location = System::Drawing::Point(12, 142);
			this->ac->Name = L"ac";
			this->ac->Size = System::Drawing::Size(100, 100);
			this->ac->TabIndex = 0;
			this->ac->Text = L"C";
			this->ac->UseVisualStyleBackColor = false;
			this->ac->Click += gcnew System::EventHandler(this, &Main::C_Click);
			// 
			// textBox1
			// 
			this->textBox1->Font = (gcnew System::Drawing::Font(L"Microsoft Sans Serif", 30));
			this->textBox1->Location = System::Drawing::Point(12, 26);
			this->textBox1->Multiline = true;
			this->textBox1->Name = L"textBox1";
			this->textBox1->Size = System::Drawing::Size(474, 89);
			this->textBox1->TabIndex = 1;
			this->textBox1->Text = L"0";
			this->textBox1->TextAlign = System::Windows::Forms::HorizontalAlignment::Right;
			// 
			// del
			// 
			this->del->BackColor = System::Drawing::Color::White;
			this->del->FlatAppearance->BorderSize = 0;
			this->del->FlatStyle = System::Windows::Forms::FlatStyle::Flat;
			this->del->Font = (gcnew System::Drawing::Font(L"Microsoft Sans Serif", 25));
			this->del->Location = System::Drawing::Point(133, 142);
			this->del->Name = L"del";
			this->del->Size = System::Drawing::Size(100, 100);
			this->del->TabIndex = 2;
			this->del->Text = L"DEL";
			this->del->UseVisualStyleBackColor = false;
			// 
			// porcentaje
			// 
			this->porcentaje->BackColor = System::Drawing::Color::White;
			this->porcentaje->FlatAppearance->BorderSize = 0;
			this->porcentaje->FlatStyle = System::Windows::Forms::FlatStyle::Flat;
			this->porcentaje->Font = (gcnew System::Drawing::Font(L"Microsoft Sans Serif", 30));
			this->porcentaje->Location = System::Drawing::Point(253, 142);
			this->porcentaje->Name = L"porcentaje";
			this->porcentaje->Size = System::Drawing::Size(100, 100);
			this->porcentaje->TabIndex = 3;
			this->porcentaje->Text = L"%";
			this->porcentaje->UseVisualStyleBackColor = false;
			// 
			// division
			// 
			this->division->BackColor = System::Drawing::Color::White;
			this->division->FlatAppearance->BorderSize = 0;
			this->division->FlatStyle = System::Windows::Forms::FlatStyle::Flat;
			this->division->Font = (gcnew System::Drawing::Font(L"Microsoft Sans Serif", 30));
			this->division->Location = System::Drawing::Point(371, 142);
			this->division->Name = L"division";
			this->division->Size = System::Drawing::Size(100, 100);
			this->division->TabIndex = 4;
			this->division->Text = L"÷";
			this->division->UseVisualStyleBackColor = false;
			this->division->Click += gcnew System::EventHandler(this, &Main::enterFunction);
			// 
			// multiplicacion
			// 
			this->multiplicacion->BackColor = System::Drawing::Color::White;
			this->multiplicacion->FlatAppearance->BorderSize = 0;
			this->multiplicacion->FlatStyle = System::Windows::Forms::FlatStyle::Flat;
			this->multiplicacion->Font = (gcnew System::Drawing::Font(L"Microsoft Sans Serif", 30));
			this->multiplicacion->Location = System::Drawing::Point(371, 258);
			this->multiplicacion->Name = L"multiplicacion";
			this->multiplicacion->Size = System::Drawing::Size(100, 100);
			this->multiplicacion->TabIndex = 8;
			this->multiplicacion->Text = L"x";
			this->multiplicacion->UseVisualStyleBackColor = false;
			this->multiplicacion->Click += gcnew System::EventHandler(this, &Main::enterFunction);
			// 
			// button9
			// 
			this->button9->BackColor = System::Drawing::Color::White;
			this->button9->FlatAppearance->BorderSize = 0;
			this->button9->FlatStyle = System::Windows::Forms::FlatStyle::Flat;
			this->button9->Font = (gcnew System::Drawing::Font(L"Microsoft Sans Serif", 30));
			this->button9->Location = System::Drawing::Point(253, 258);
			this->button9->Name = L"button9";
			this->button9->Size = System::Drawing::Size(100, 100);
			this->button9->TabIndex = 7;
			this->button9->Text = L"9";
			this->button9->UseVisualStyleBackColor = false;
			this->button9->Click += gcnew System::EventHandler(this, &Main::EnterNumber);
			// 
			// button8
			// 
			this->button8->BackColor = System::Drawing::Color::White;
			this->button8->FlatAppearance->BorderSize = 0;
			this->button8->FlatStyle = System::Windows::Forms::FlatStyle::Flat;
			this->button8->Font = (gcnew System::Drawing::Font(L"Microsoft Sans Serif", 25));
			this->button8->Location = System::Drawing::Point(133, 258);
			this->button8->Name = L"button8";
			this->button8->Size = System::Drawing::Size(100, 100);
			this->button8->TabIndex = 6;
			this->button8->Text = L"8";
			this->button8->UseVisualStyleBackColor = false;
			this->button8->Click += gcnew System::EventHandler(this, &Main::EnterNumber);
			// 
			// button7
			// 
			this->button7->BackColor = System::Drawing::Color::White;
			this->button7->FlatAppearance->BorderSize = 0;
			this->button7->FlatStyle = System::Windows::Forms::FlatStyle::Flat;
			this->button7->Font = (gcnew System::Drawing::Font(L"Microsoft Sans Serif", 30));
			this->button7->Location = System::Drawing::Point(12, 258);
			this->button7->Name = L"button7";
			this->button7->Size = System::Drawing::Size(100, 100);
			this->button7->TabIndex = 5;
			this->button7->Text = L"7";
			this->button7->UseVisualStyleBackColor = false;
			this->button7->Click += gcnew System::EventHandler(this, &Main::EnterNumber);
			// 
			// menos
			// 
			this->menos->BackColor = System::Drawing::Color::White;
			this->menos->FlatAppearance->BorderSize = 0;
			this->menos->FlatStyle = System::Windows::Forms::FlatStyle::Flat;
			this->menos->Font = (gcnew System::Drawing::Font(L"Microsoft Sans Serif", 30));
			this->menos->Location = System::Drawing::Point(371, 378);
			this->menos->Name = L"menos";
			this->menos->Size = System::Drawing::Size(100, 100);
			this->menos->TabIndex = 12;
			this->menos->Text = L"-";
			this->menos->UseVisualStyleBackColor = false;
			this->menos->Click += gcnew System::EventHandler(this, &Main::enterFunction);
			// 
			// button6
			// 
			this->button6->BackColor = System::Drawing::Color::White;
			this->button6->FlatAppearance->BorderSize = 0;
			this->button6->FlatStyle = System::Windows::Forms::FlatStyle::Flat;
			this->button6->Font = (gcnew System::Drawing::Font(L"Microsoft Sans Serif", 30));
			this->button6->Location = System::Drawing::Point(253, 378);
			this->button6->Name = L"button6";
			this->button6->Size = System::Drawing::Size(100, 100);
			this->button6->TabIndex = 11;
			this->button6->Text = L"6";
			this->button6->UseVisualStyleBackColor = false;
			this->button6->Click += gcnew System::EventHandler(this, &Main::EnterNumber);
			// 
			// button5
			// 
			this->button5->BackColor = System::Drawing::Color::White;
			this->button5->FlatAppearance->BorderSize = 0;
			this->button5->FlatStyle = System::Windows::Forms::FlatStyle::Flat;
			this->button5->Font = (gcnew System::Drawing::Font(L"Microsoft Sans Serif", 25));
			this->button5->Location = System::Drawing::Point(133, 378);
			this->button5->Name = L"button5";
			this->button5->Size = System::Drawing::Size(100, 100);
			this->button5->TabIndex = 10;
			this->button5->Text = L"5";
			this->button5->UseVisualStyleBackColor = false;
			this->button5->Click += gcnew System::EventHandler(this, &Main::EnterNumber);
			// 
			// button4
			// 
			this->button4->BackColor = System::Drawing::Color::White;
			this->button4->FlatAppearance->BorderSize = 0;
			this->button4->FlatStyle = System::Windows::Forms::FlatStyle::Flat;
			this->button4->Font = (gcnew System::Drawing::Font(L"Microsoft Sans Serif", 30));
			this->button4->Location = System::Drawing::Point(12, 378);
			this->button4->Name = L"button4";
			this->button4->Size = System::Drawing::Size(100, 100);
			this->button4->TabIndex = 9;
			this->button4->Text = L"4";
			this->button4->UseVisualStyleBackColor = false;
			this->button4->Click += gcnew System::EventHandler(this, &Main::EnterNumber);
			// 
			// mas
			// 
			this->mas->BackColor = System::Drawing::Color::White;
			this->mas->FlatAppearance->BorderSize = 0;
			this->mas->FlatStyle = System::Windows::Forms::FlatStyle::Flat;
			this->mas->Font = (gcnew System::Drawing::Font(L"Microsoft Sans Serif", 30));
			this->mas->Location = System::Drawing::Point(371, 501);
			this->mas->Name = L"mas";
			this->mas->Size = System::Drawing::Size(100, 100);
			this->mas->TabIndex = 16;
			this->mas->Text = L"+";
			this->mas->UseVisualStyleBackColor = false;
			this->mas->Click += gcnew System::EventHandler(this, &Main::enterFunction);
			// 
			// button3
			// 
			this->button3->BackColor = System::Drawing::Color::White;
			this->button3->FlatAppearance->BorderSize = 0;
			this->button3->FlatStyle = System::Windows::Forms::FlatStyle::Flat;
			this->button3->Font = (gcnew System::Drawing::Font(L"Microsoft Sans Serif", 30));
			this->button3->Location = System::Drawing::Point(253, 501);
			this->button3->Name = L"button3";
			this->button3->Size = System::Drawing::Size(100, 100);
			this->button3->TabIndex = 15;
			this->button3->Text = L"3";
			this->button3->UseVisualStyleBackColor = false;
			this->button3->Click += gcnew System::EventHandler(this, &Main::EnterNumber);
			// 
			// button2
			// 
			this->button2->BackColor = System::Drawing::Color::White;
			this->button2->FlatAppearance->BorderSize = 0;
			this->button2->FlatStyle = System::Windows::Forms::FlatStyle::Flat;
			this->button2->Font = (gcnew System::Drawing::Font(L"Microsoft Sans Serif", 25));
			this->button2->Location = System::Drawing::Point(133, 501);
			this->button2->Name = L"button2";
			this->button2->Size = System::Drawing::Size(100, 100);
			this->button2->TabIndex = 14;
			this->button2->Text = L"2";
			this->button2->UseVisualStyleBackColor = false;
			this->button2->Click += gcnew System::EventHandler(this, &Main::EnterNumber);
			// 
			// button1
			// 
			this->button1->BackColor = System::Drawing::Color::White;
			this->button1->FlatAppearance->BorderSize = 0;
			this->button1->FlatStyle = System::Windows::Forms::FlatStyle::Flat;
			this->button1->Font = (gcnew System::Drawing::Font(L"Microsoft Sans Serif", 30));
			this->button1->Location = System::Drawing::Point(12, 501);
			this->button1->Name = L"button1";
			this->button1->Size = System::Drawing::Size(100, 100);
			this->button1->TabIndex = 13;
			this->button1->Text = L"1";
			this->button1->UseVisualStyleBackColor = false;
			this->button1->Click += gcnew System::EventHandler(this, &Main::EnterNumber);
			// 
			// igual
			// 
			this->igual->BackColor = System::Drawing::Color::White;
			this->igual->FlatAppearance->BorderSize = 0;
			this->igual->FlatStyle = System::Windows::Forms::FlatStyle::Flat;
			this->igual->Font = (gcnew System::Drawing::Font(L"Microsoft Sans Serif", 30));
			this->igual->Location = System::Drawing::Point(371, 620);
			this->igual->Name = L"igual";
			this->igual->Size = System::Drawing::Size(100, 100);
			this->igual->TabIndex = 20;
			this->igual->Text = L"=";
			this->igual->UseVisualStyleBackColor = false;
			this->igual->Click += gcnew System::EventHandler(this, &Main::igual_Click);
			// 
			// punto
			// 
			this->punto->BackColor = System::Drawing::Color::White;
			this->punto->FlatAppearance->BorderSize = 0;
			this->punto->FlatStyle = System::Windows::Forms::FlatStyle::Flat;
			this->punto->Font = (gcnew System::Drawing::Font(L"Microsoft Sans Serif", 30));
			this->punto->Location = System::Drawing::Point(253, 620);
			this->punto->Name = L"punto";
			this->punto->Size = System::Drawing::Size(100, 100);
			this->punto->TabIndex = 19;
			this->punto->Text = L".";
			this->punto->UseVisualStyleBackColor = false;
			this->punto->Click += gcnew System::EventHandler(this, &Main::punto_Click);
			// 
			// button0
			// 
			this->button0->BackColor = System::Drawing::Color::White;
			this->button0->FlatAppearance->BorderSize = 0;
			this->button0->FlatStyle = System::Windows::Forms::FlatStyle::Flat;
			this->button0->Font = (gcnew System::Drawing::Font(L"Microsoft Sans Serif", 25));
			this->button0->Location = System::Drawing::Point(133, 620);
			this->button0->Name = L"button0";
			this->button0->Size = System::Drawing::Size(100, 100);
			this->button0->TabIndex = 18;
			this->button0->Text = L"0";
			this->button0->UseVisualStyleBackColor = false;
			this->button0->Click += gcnew System::EventHandler(this, &Main::EnterNumber);
			// 
			// ans
			// 
			this->ans->BackColor = System::Drawing::Color::White;
			this->ans->FlatAppearance->BorderSize = 0;
			this->ans->FlatStyle = System::Windows::Forms::FlatStyle::Flat;
			this->ans->Font = (gcnew System::Drawing::Font(L"Microsoft Sans Serif", 30));
			this->ans->Location = System::Drawing::Point(12, 620);
			this->ans->Name = L"ans";
			this->ans->Size = System::Drawing::Size(100, 100);
			this->ans->TabIndex = 17;
			this->ans->Text = L"Ans";
			this->ans->UseVisualStyleBackColor = false;
			// 
			// Main
			// 
			this->AutoScaleDimensions = System::Drawing::SizeF(6, 13);
			this->AutoScaleMode = System::Windows::Forms::AutoScaleMode::Font;
			this->ClientSize = System::Drawing::Size(498, 738);
			this->Controls->Add(this->igual);
			this->Controls->Add(this->punto);
			this->Controls->Add(this->button0);
			this->Controls->Add(this->ans);
			this->Controls->Add(this->mas);
			this->Controls->Add(this->button3);
			this->Controls->Add(this->button2);
			this->Controls->Add(this->button1);
			this->Controls->Add(this->menos);
			this->Controls->Add(this->button6);
			this->Controls->Add(this->button5);
			this->Controls->Add(this->button4);
			this->Controls->Add(this->multiplicacion);
			this->Controls->Add(this->button9);
			this->Controls->Add(this->button8);
			this->Controls->Add(this->button7);
			this->Controls->Add(this->division);
			this->Controls->Add(this->porcentaje);
			this->Controls->Add(this->del);
			this->Controls->Add(this->textBox1);
			this->Controls->Add(this->ac);
			this->FormBorderStyle = System::Windows::Forms::FormBorderStyle::FixedSingle;
			this->Icon = (cli::safe_cast<System::Drawing::Icon^>(resources->GetObject(L"$this.Icon")));
			this->Name = L"Main";
			this->Text = L"Calculadora - Jesus Mendoza 1A";
			this->Click += gcnew System::EventHandler(this, &Main::EnterNumber);
			this->ResumeLayout(false);
			this->PerformLayout();

		}
#pragma endregion
	double num1, num2, resultado;
	String^ function;

	private: System::Void C_Click(System::Object^ sender, System::EventArgs^ e) 
	{
		textBox1->Text = "0";
	}
	private: System::Void button14_Click(System::Object^ sender, System::EventArgs^ e) {
	}
	private: System::Void EnterNumber(System::Object^ sender, System::EventArgs^ e) {
		Button^ nums = safe_cast<Button^>(sender);

		if (textBox1->Text == "0") 
		{
			textBox1->Text = nums->Text;
		}
		else 
		{
			textBox1->Text = textBox1->Text + nums->Text;
		}
}
private: System::Void enterFunction(System::Object^ sender, System::EventArgs^ e) {
	Button^ numsFunction = safe_cast<Button^>(sender);
	num1 = double::Parse(textBox1->Text);

	textBox1->Text = "";
	function = numsFunction->Text;
}
private: System::Void punto_Click(System::Object^ sender, System::EventArgs^ e) {
	if (!textBox1->Text->Contains("."))
	{
		textBox1->Text = textBox1->Text + ".";
	}
}
private: System::Void igual_Click(System::Object^ sender, System::EventArgs^ e) {
	num2 = double::Parse(textBox1->Text);
	if (function == "+")
	{
		resultado = num1 + num2;
		textBox1->Text = System::Convert::ToString(resultado);
	}
	else if (function == "-")
	{
		resultado = num1 - num2;
		textBox1->Text = System::Convert::ToString(resultado);
	}
	else if (function == "x")
	{
		resultado = num1 * num2;
		textBox1->Text = System::Convert::ToString(resultado);
	}
	else if (function == "÷")
	{
		resultado = num1 / num2;
		textBox1->Text = System::Convert::ToString(resultado);
	}
}
};
}
