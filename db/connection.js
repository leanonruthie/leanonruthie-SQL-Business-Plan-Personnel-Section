// Work Reference #2 - // Work reference #2 -RUT-VIRT-FSF-PT-06-2022-U-LOLC/12-SQL/01-Activities/12-Stu_Connect-Node - I already changed my root password so I don't mind connection.js not in .gitignore
const db = mysql.createConnection(
    {
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'MyNew#1PW!',
      database: 'company_db'
    },
    console.log(`Connected to the company_db database.`)
  );
  