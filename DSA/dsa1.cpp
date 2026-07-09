#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

void array(){
    // declaration of array
    int n= 5;
    int arr[n];

    // initialization 
    arr[]={1,2,3,4,5};

    // operations: 
    // 1. linear traversal
    for(int i=0; i<n; i++){
        cout<<arr[i]<<" ";
    }
    cout<<endl;

    // 2. reverse traversal 
    for(int i=n-1; i>=0; i--){
        cout<<arr[i]<<" ";
    }
    cout<<endl;

    //3. search element 
    int idx;
    int target=2;
    for(int i=0; i<n; i++){
        if(target==arr[i]){
            idx=i;
            break;
        }
    }
    cout<<idx<<endl;

    // 4. modifying elements:
    for(int i=0; i<n; i++){
        arr[i]+=5;
    }

    // 5. insert element at beginning of array 
    // this can only occur inside vector 
    vector <int> a={1,2,3,4,5};

    a.insert(a.begin(),0);

    for(int i=n ; i>0; i++){
        arr[i]=arr[i-1];
    }
    arr[0]=0; 

    // 6. insert element at a given position
    a={1,2,3,4,5};
    int pos=2; 

    a.insert(a.begin()+pos-1, 15);

    // 7. insert element at the end 
    a={1,2,3,4,5};

    a.insert(a.end(),6);

    // 8. delete an element from start 
    a={1,2,3,4,5};

    a.erase(a.begin());

    // 9. delete element from given position
    a={1,2,3,4,5};

    a.erase(a.begin()+pos-1, 2);

    // 10. delete first occ
    a={1,2,3,4,5};

    for(int i=0; i<n; i++){
        if(arr[i]==2){
            idx=i;
            break;
        }
    }

    a.erase(a.begin()+idx-1,2);

    // 11. delete all occurences
    a[]={1,2,3,4,5};
    int k=0;
    for(int i=0; i<n; i++){
        if(arr[i]!=2){
            arr[i]=arr[i+1];
            k++;
        }
    }

    // 12. delete elemeny from end
    a.erase(a.end(),arr[n-1]);
    //or
    a.pop_back();

    // 13. check whether the array is sorted
    is_sorted(a.begin(),a.end());

    // 14. reverse 
    reverse(a.begin(), a.end());

    // reverseArray in gp
    int k= 3;
    int start=0;
    int end=k;
    for(int i=0; i<n ; i+=k){
       start=i;
       end= min(i + k - 1, n - 1);
       while(start<end){
        swap(a[start],a[end]);
        start++;
        end--;
       }
       
    }
}

void matrix(){
    // declaration 
    int row=3;
    int col=3;
    vector <vector <int>> arr(row, vector <int> (col));

    // initialising
    arr={{1,2,3},{4,5,6},{7,8,9}};

    // 1. access elements of matrix
    for(int i=0; i<row; i++){
        for(int j=0; j<col; j++){
            cout<< arr[i][j]<<" ";
        }
        cout<<endl;
    }

    //2. searching in matrix
    int target=5;
    for(int i=0; i<row; i++){
        for(int j=0; j<col; j++){
            if(arr[i][j]==target){
                cout<< i <<" "<<j ;
            }
        }
        cout<<endl;
    }

    // 3. sort matrix row wise
    for(int i=0; i<row; i++){
        sort(arr.begin(),arr.end());
    }

    // 4. sort matrix column wise

    // first transpose it 
    vector <int> arr1(col,row);
    for(int i=0; i<row; i++){
        for(int j=0; j<col; j++){
            arr1[j][i]= arr[i][j];
        }
    }
    
    // then sort column wise then transpose

}

int main(){
    array();
    matrix();
    return 0;
}