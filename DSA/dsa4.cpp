#include <iostream>
#include <vector>
#include <math.h>
using namespace std;

int majorityElem(vector <int> arr, int n){
    int elem= 0;
    int count=1;
    for(int i=1; i<n; i++){
        if(arr[i]==arr[elem]){
            count++;
        }else{
            count--;
        }
        if(count==0){
            count=1;
            elem=i;
        }        
    }
    count=0;
    for(int i=0; i<n; i++){
        if(arr[elem]==arr[i]){
            count++;
        }
    }
    if(count==n/2){
        return elem;
    }else{
        return -1;
    }
}

//Given an array arr[] consisting of n integers, find all
// the array elements which occurs more than floor(n/3) times.

int majElem2(vector <int> arr, int n){
    int el1=-1;
    int el2=-1;
    int cnt1=0;
    int cnt2=0;
    for(int elem: arr){
        if(elem==el1){
            cnt1++;
        }else if(elem=el2){
            cnt2++;
        }else if(cnt1==0){
            el1=elem;
        }else if(cnt2==0){
            el2=elem;
        }else{
            cnt1--;
            cnt2--;
        }
    }
    cnt1=0;
    cnt2=0;
    for(int elem: arr){
        if(el1==elem){
            cnt1++;
        }else if(el2==elem){
            cnt2++;
        }
    }
    if(cnt1==n/3){
        cout<<el1<<endl;
    }else if(cnt2==n/3){
        cout<<el2<<endl;
    }
}

// third problem not undestood