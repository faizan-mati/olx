// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, getDoc, setDoc, doc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { query, where, } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBisZD6e0h5ZuylvBuNOdmdfZ4KIIxrUyE",
    authDomain: "olx-project-b9a70.firebaseapp.com",
    projectId: "olx-project-b9a70",
    storageBucket: "olx-project-b9a70.appspot.com",
    messagingSenderId: "405630364017",
    appId: "1:405630364017:web:b4bebef5afea187c886ed0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
    const db = getFirestore(app);
    const storage = getStorage(app);

const RegisterUser = async (name, email, password) => {
    // console.log(" user data : ", name, email, password)
    try {
        // console.log(name, email, password);
        const res = await createUserWithEmailAndPassword(auth, email, password);
        // console.log("User created:", res.user);
        // alert("User created successfully");
        return {
            status: 200,
            message: "Successfully Create Account",
            data: res.user
        }
    } catch (error) {
        console.error("Error creating user:", error.message); // Display the error message
        alert("User creation failed: " + error.message); // Display the error message in the alert
        return {
            status: 500,
            message: error.message,
            data: null
        }
    }

}

const loginUser = async (email, password) => {
    try {
        // console.log(email, password);
        const res = await signInWithEmailAndPassword(auth, email, password);
        // console.log("User logged in:", res.user);
        // alert("User logged in successfully");
        return {
            status: 200,
            message: "Successfully Login Account",
            data: res.user
        }
    } catch (error) {
        console.error("Error logging in:", error.message);
        alert("Login failed: " + error.message);
        return {
            status: 500,
            message: error.message,
            data: null
        }
    }
}

const logout = async () => {
    try {
        const res = await signOut(auth);
        return {
            status: 200,
            message: "Successfully Logout Account",
            data: res.user
        }
    } catch (error) {
        // alert("Login failed: " + error.message);
        return {
            status: 500,
            message: error.message,
            data: null
        }
    }
}

let uid = null;

// Create a function to get the current user's UID
const getCurrentUserUID = () => {
  const user = auth.currentUser;
  if (user) {
    uid = user.uid;
    // console.log("uid in if : " , uid)
  } else {
    uid = null;
    // console.log("uid in else : " , uid)
  }
//   console.log("uid in return : " , uid)     
  return uid;
};

const post = async (uid, name, description, price, profilePix) => {

// console.log("after submit :",uid, name, description, price, profilePix)

    try {

        // console.log("db:", db);
        // console.log("name:", name);
        // console.log("profilepix top:", profilePix);

        // console.log("profilePix[0].name:", profilePix[0].name);
        
        const imageRef = ref(storage, profilePix[0].name)
        // console.log("imageRef", imageRef)

        const uploadRes = await uploadBytes(imageRef, profilePix[0])
        // console.log("uploadRes", uploadRes)

        const imageURL = await getDownloadURL(uploadRes.ref)
        // console.log("imageURL", imageURL)
        alert("Successfully Uploaded Add")

        const docRef = await addDoc(collection(db, "post"), {
            name: name,
            description: description,
            price: price,
            picture: imageURL,
            uid
        });


        //   const docRef = await setDoc(doc(db, "user", uid), {
        //     name: name,
        //     email: email,
        //     password: password,
        //     profilePicture: imageURL,
        //     uid
        //   });


        // console.log("Document written: ", docRef);

    } catch (error) {
        // console.log("Error writing document:", error.message);
    }


}

const getData = async (uid) => {

    // console.log("getdata uid:", uid);

    try {
       const docRef = query(collection(db, "post"), where("uid", "==", uid));
        // const res = await getDocs(docRef)
        // const data = res.data()
        // console.log("firebase getUserData", docRef)

        const querySnapshot = await getDocs(docRef);
        let copyData =[]
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            const data = doc.data()
            data.docid = doc.id
            // console.log(doc.id, " => ", doc.data());
            // copyData.push(doc.data())
            // console.log("getdata docid", doc.id)
            // console.log("Copydata". copyData)
            // console.log("doc", data)
            copyData.push(data)
        });
        return {
            status: 200,
            message: "Success",
            data: copyData
        }
    }
    catch (error) {
        // console.log(error.message)
        return {
            status: 500,
            message: error.message,
            data: null
        }
    }
}

const getAllData = async () => {

    // console.log("getdata uid:", uid);

    try {
       const docRef = query(collection(db, "post"));
        // const res = await getDocs(docRef)
        // const data = res.data()
        // console.log("firebase getUserData", res)

        const querySnapshot = await getDocs(docRef);
        let copyData =[]
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            const data = doc.data()
            data.docid = doc.id
            // console.log(doc.id, " => ", doc.data());
            // copyData.push(doc.data())
            // console.log("doc", data)
            copyData.push(data)
        });
        // console.log("Copydata". copyData)
        return {
            status: 200,
            message: "Success",
            data: copyData
        }
    }
    catch (error) {
        // console.log(error.message)
        return {
            status: 500,
            message: error.message,
            data: null
        }
    }
}

const getSingleAdd = async (id) => {

    try {

        const docRef = doc(db, "post", id)
        const res = await getDoc(docRef)
        const data = res.data()
        // console.log("firebase getUserData", res)

        return {
            status: 200,
            message: "",
            data: data
        }
    }
    catch (error) {
        console.log(error.message)
        return {
            status: 500,
            message: error.message,
            data: null
        }
    }
}

export {
    RegisterUser,
    loginUser,
    auth,
    logout,
    getAllData,
    post,
    getCurrentUserUID,
    getData,
    getSingleAdd
}