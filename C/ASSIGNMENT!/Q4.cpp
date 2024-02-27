#include<iostream>
#include<cmath>
using namespace std;

int main(){

    float a = 0;

    for (int i = 1;i <= 98; i++)
    {
       for (int j = 1;j <= 98 ; j++)
       {
        for (int k = 1;k <= 98 ; k++)
        {
            // if (i +j + k > 100)
            // {
            //     break;
            // }
            a = ((cbrt( ( i + j * sqrt( k ) ) )) + (cbrt( ( i - j * sqrt( k ) ) )));

            if (a == 1 && i + j + k <= 100)
            {
                cout<<"("<<i<<","<<j<<","<<k<<")"<<endl;
            }
            
        }
        
       }
       
    }
    

    return 0;
}