import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc, updateDoc } from "firebase/firestore";
import { app } from './firebase.js';

const auth = getAuth(app);
const db = getFirestore(app);

window.adminLogin = async () => {
  const email = document.getElementById("adminEmail").value;
  const password = document.getElementById("adminPassword").value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    document.getElementById("adminPanel").style.display = "block";
    alert("Admin login successful");
  } catch (error) {
    alert("Login failed: " + error.message);
  }
};

window.postAnnouncement = async () => {
  const text = document.getElementById("announcementText").value;
  try {
    await setDoc(doc(db, "announcements", "latest"), {
      message: text,
      timestamp: Date.now()
    });
    alert("Announcement posted!");
  } catch (error) {
    alert("Failed to post announcement: " + error.message);
  }
};

window.createRoom = async () => {
  const id = document.getElementById("roomID").value;
  const password = document.getElementById("roomPassword").value;
  try {
    await setDoc(doc(db, "room", "active"), {
      id,
      password,
      createdAt: Date.now()
    });
    alert("Room created successfully!");
  } catch (error) {
    alert("Failed to create room: " + error.message);
  }
};

window.updateLeaderboard = async () => {
  const uid = document.getElementById("uid").value;
  const score = parseInt(document.getElementById("score").value);
  try {
    await setDoc(doc(db, "leaderboard", uid), {
      score,
      lastUpdated: Date.now()
    });
    alert("Leaderboard updated!");
  } catch (error) {
    alert("Error: " + error.message);
  }
};

window.banUser = async () => {
  const banUID = document.getElementById("banUID").value;
  try {
    await setDoc(doc(db, "bannedUsers", banUID), {
      banned: true,
      timestamp: Date.now()
    });
    alert("User banned successfully!");
  } catch (error) {
    alert("Error banning user: " + error.message);
  }
};
