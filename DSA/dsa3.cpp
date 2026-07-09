#include <iostream>
#include <vector>
#include <algorithm>
#include <math.h>
using namespace std;

// buy and sell stock at only one transaction 
// 7, 10, 1, 3, 6, 9, 2
int transOnce(vector <int> arr){
    int minm=arr[0];
    int profit=0;
    int k;
    for(int i=0; i<arr.size(); i++){
        // we have to make max profit 
        // min cp
        minm= min(arr[i], minm);
        profit= max(profit, arr[i]-minm);   
    }
    return profit;
}

// buy and sell the stock at multiple transactions

int transacMul(vector <int> arr){
    int profit=0;;
    for(int i=1; i<arr.size(); i++){
        if(arr[i]> arr[i-1]){
            profit+= arr[i]-arr[i-1];
        }
    }
    return profit;
}

// leader in an array

vector <int> leader(vector <int> arr){
    vector <int> maxm;
    int n= arr.size();
    int maxmm=arr[n-1];
    maxm.push_back(maxmm);
    for(int i=n-2; i>=0;i--){
        if(arr[i]>maxmm){
            maxm.push_back(arr[i]);
        }}
    reverse(maxm.begin(),maxm.end());
    return maxm;
}

int main(){
    vector <int> arr={1,2,3,4,5,6};
    cout<<transOnce(arr)<<endl;
    cout<<transacMul(arr)<<endl;
     leader(arr);
    return 0;
}