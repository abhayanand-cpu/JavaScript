#include<iostream>
using namespace std;

int main(){
    
    long long ar[100];
    ar[0] = 0;
    ar[1] = 1;

    int n = 1;

    while (true)
    {
        ++n;
        ar[n] = ar[n-1] + ar[n-2];
        if (ar[n] >= 1000000000)
        {
            break;
        }
        
    }
    cout<<"the first term in the Fibonacci sequence to contain 10 digits is "<<n<<endl;
    
    
    return 0;
}