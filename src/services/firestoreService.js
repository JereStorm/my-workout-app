import { db } from '../firebaseConfig';
import {
    collection, doc, getDoc, getDocs, setDoc, addDoc, updateDoc, deleteDoc, query, where, orderBy
} from 'firebase/firestore';