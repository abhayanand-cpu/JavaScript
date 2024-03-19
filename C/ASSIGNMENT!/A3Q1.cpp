#include<iostream>
using namespace std;

class Employee{

    public:
        int salary, hours;

    public:
        void getInfo( int salary,int hours ){
            this->salary = salary;
            this->hours = hours;    
        }

    public:
        void AddSal(){
            if (salary < 500)
            {
                salary += 10;
            }
            
        }

    public:
        void AddWork(){
            if (hours > 6)
            {
                salary += 5;
            }
            
        }

};


int main(){
    
    int salary,hours;
    Employee e[10];

    for( int i = 0; i < 10; i++ ){
        cout<<"Enter salary and hours of "<<i<<" th Employee: "<<endl;
        cin>>salary>>hours;
        e[i].getInfo(salary,hours);
        e[i].AddSal();
        e[i].AddWork();
        cout<<"Salary of "<<i<<"th Employee is "<<e[i].salary<<endl;
    }

    return 0;
}