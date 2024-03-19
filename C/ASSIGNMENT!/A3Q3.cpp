#include<iostream>
using namespace std;


class Time{
    public:
        int hours, minutes;

    public:
        void getTime( int hours, int minutes ){
            this->hours = hours;
            this->minutes = minutes;
        }
    public:
        void addTime( Time t1, Time t2 ){
            hours = t1.hours + t2.hours;
            minutes = t1.minutes + t2.minutes;
            hours += minutes/60;
            minutes %= 60;
        }
    public:
        void print(){
            cout<<"Added time is "<<hours<<" hours and "<<minutes<<" minutes "<<endl;
        }
};

int main(){

    Time t1;
    t1.getTime(2,45);
    Time t2;
    t2.getTime(3,30);
    Time t3;
    t3.addTime(t1,t2);
    t3.print();
    return 0;
}