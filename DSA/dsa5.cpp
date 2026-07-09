#include <iostream>
#include <map>
#include <vector>

using namespace std;

int main(){
    // provided array
    
    vector <int> arr={1,3,2,1,3};

    // enter the maxm value

    int n=3;

    // create a frequency vector

    vector <int> freq(n);

    // initialise the values with 0
    
    for(int i=0; i<=n; i++){
        freq[i]=0;
    }

    // fill the frequencies
    
    for(int i=0; i<arr.size(); i++){
        freq[arr[i]]+=1;
    }

    // print the array 

    for(int i=0; i<=n; i++){
       // cout<<freq[i]<<" ";
    }

    //**************************************************

    // hashing for string

    string str="abcdabejc";

    // create a frequency vector

    vector <int> freq1(26);

    // assign the values to frequency vector

    for(int i=0; i<26; i++){
        freq1[i]=0;
    }

    // counting the letters

    for(int i=0; i<str.size(); i++){
        char ch= str[i];
        int cha= (int) ch;
        freq1[cha-97]+=1;
    }

    // printing the count 

    for(int i=0; i<26; i++){
       // cout<< freq1[i]<<" ";
    }

    //**************************************************

    // using hash-map method 

    vector <int> arr1 ={1,2,3,1,3,2,12};

    // create a map 

    map<int,int> mpp;

    //  now count the frequencies: 

    for(int i=0; i<arr1.size(); i++){
        mpp[arr1[i]]++;
    }

    // now print it: 

    for(int i=0; i< arr1.size(); i++){
      //  cout<< mpp[arr1[i]]<<" ";
    }

    // or 

    for(auto it: mpp){
      //  cout<< it.first<<" --> "<< it.second<<endl;
    }

    // **********************************************************

    // two sum approach 

    vector <int> nums={2,7,11,15};
    int target=9;

    // create a vector that stores the result

    int idx[2];

    // brute force approach

    for(int i=0; i<nums.size(); i++){
        for(int j=i+1; j<nums.size(); j++){
            if((nums[i]+nums[j])==target){
                idx[0]= i;
                idx[1]=j;
                break;
            }
        }
    }

    // printing the result

    for(int i=0; i<2; i++){
        cout<< idx[i]<<" ";
    }

    return 0;
}