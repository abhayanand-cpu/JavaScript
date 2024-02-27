// Online C++ compiler to run C++ program online
#include <iostream>
using namespace std;

int main(){

    int arr[] = {-1,0,0,0,0,0};

    int vote = 0;

    while ( vote != -1 )
    {
        cin >> vote;
        
        if( vote > 0 && vote < 6 ){
            arr[vote] = arr[vote] + 1;
        }
        else{
            arr[0] = arr[0] + 1;
        }
        cout<<"Press -1 to exit voting"<<endl;
    }
    int l = sizeof(arr)/sizeof(int);
    for( int i = 1; i < l; i++ ){
        cout << "vote of "<<i<<" candidate "<<arr[i]<<endl;
    }
    cout<<"spoilt ballots are "<<arr[0]<<endl;
    return 0;
}
