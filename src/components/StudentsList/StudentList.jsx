function StudentsList() {
  const students = [
    "Ahmad",
    "Ali",
    "Husna",
    "Abdullah",
    "Sarah",
    "Zainab",
    "Raghad",
    "Sayed Hamed",
  ];
  return students.map((oneStudent) => (
    <ul>
      <li key={oneStudent}>{oneStudent}</li>
    </ul>
  ));
}

export default StudentsList;
