const questions = [
    {
        q: "1. Which keyword is used to eliminate duplicate values from a result set?",
        options: ["A. UNIQUE", "B. DISTINCT", "C. FILTER", "D. GROUP BY"],
        correct: 1,
        explanation: "DISTINCT removes duplicates. Imagine you have a list of names with repeats. DISTINCT makes sure every name appears only once. This cleans your data.",
        code: "SELECT DISTINCT author_lname FROM books;"
    },
    {
        q: "2. How does the ORDER BY clause behave by default?",
        options: ["A. It sorts data in descending order (Z-A).", "B. It sorts data in ascending order (A-Z).", "C. It sorts data randomly.", "D. It sorts data based on the primary key."],
        correct: 1,
        explanation: "SQL sorts from A-Z by default. You do not need to type anything extra. If you want Z-A, you must type DESC.",
        code: "SELECT title FROM books ORDER BY title; -- Defaults to A-Z"
    },
    {
        q: "3. In the command LIMIT 5, 10, what does the first number (5) represent?",
        options: ["A. The total number of rows to return.", "B. The ending row number.", "C. The starting row offset (where to start taking rows).", "D. The page number."],
        correct: 2,
        explanation: "The first number tells SQL where to start. The second number tells how many rows to take. So, start at row 5, take 10 rows.",
        code: "SELECT * FROM books LIMIT 5, 10;"
    },
    {
        q: "4. Which wildcard character matches exactly one character in a LIKE pattern?",
        options: ["A. %", "B. *", "C. _", "D. ?"],
        correct: 2,
        explanation: "The underscore (_) matches exactly one letter. The percent (%) matches any number of letters. Use _ when you know the exact length.",
        code: "WHERE title LIKE 'Th_'; -- Matches 'The', not 'Then'"
    },
    {
        q: "5. Which clause would you use to sort authors by last name (A-Z) and then by book title (Z-A)?",
        options: ["A. ORDER BY author_lname ASC, title DESC", "B. ORDER BY author_lname DESC, title ASC", "C. SORT BY author_lname, title", "D. ORDER BY author_lname AND title"],
        correct: 0,
        explanation: "You can sort by multiple columns. The first column sorts first. The second column sorts only if the first column is the same.",
        code: "ORDER BY author_lname ASC, title DESC;"
    },
    {
        q: "6. What is the result of SELECT DISTINCT author_fname, author_lname?",
        options: ["A. It returns only unique first names.", "B. It returns only unique last names.", "C. It returns unique combinations of first and last names.", "D. It is an invalid query."],
        correct: 2,
        explanation: "DISTINCT looks at the whole row you selected. It ensures that the combination of First Name and Last Name is unique.",
        code: "SELECT DISTINCT author_fname, author_lname FROM books;"
    },
    {
        q: "7. How do you select the top 3 longest books from the books table?",
        options: ["A. SELECT title FROM books LIMIT 3;", "B. SELECT title FROM books ORDER BY pages DESC LIMIT 3;", "C. SELECT title FROM books ORDER BY pages ASC LIMIT 3;", "D. SELECT title FROM books WHERE pages = MAX;"],
        correct: 1,
        explanation: "To find the 'top' items, you must sort them biggest first (DESC). Then, use LIMIT to keep only the top 3.",
        code: "SELECT title FROM books ORDER BY pages DESC LIMIT 3;"
    },
    {
        q: "8. To find titles that contain the word 'the' anywhere in the string, which pattern is correct?",
        options: ["A. 'the%'", "B. '%the'", "C. '%the%'", "D. '_the_'"],
        correct: 2,
        explanation: "Put % on both sides. This tells SQL: 'I don't care what comes before or after, just find 'the' somewhere inside.'",
        code: "WHERE title LIKE '%the%';"
    },
    {
        q: "9. What does ORDER BY 2 mean in a SQL query?",
        options: ["A. Sort by the second column in the table's schema.", "B. Sort by the second column listed in the SELECT statement.", "C. Sort by the number 2.", "D. Only sort the first 2 rows."],
        correct: 1,
        explanation: "Using a number is a shortcut. It means 'sort by the 2nd column I wrote in the SELECT list'.",
        code: "SELECT title, author_lname FROM books ORDER BY 2;"
    },
    {
        q: "10. If a database has 100 rows, what is returned by LIMIT 95, 10?",
        options: ["A. 10 rows.", "B. 95 rows.", "C. 5 rows.", "D. An error message."],
        correct: 2,
        explanation: "SQL starts at row 95. It wants 10 rows. But only 5 rows are left (96, 97, 98, 99, 100). So it returns only 5.",
        code: "SELECT * FROM books LIMIT 95, 10;"
    },
    {
        q: "11. What is the difference between COUNT(*) and COUNT(column_name)?",
        options: ["A. There is no difference.", "B. COUNT(*) counts all rows; COUNT(column_name) counts only non-NULL entries.", "C. COUNT(*) only counts unique values.", "D. COUNT(column_name) is faster."],
        correct: 1,
        explanation: "COUNT(*) counts everything, even empty spots. COUNT(column) skips empty spots (NULLs).",
        code: "SELECT COUNT(*) FROM books; -- Counts all rows"
    },
    {
        q: "12. Which function would you use to calculate the total number of pages in the entire library?",
        options: ["A. COUNT(pages)", "B. AVG(pages)", "C. SUM(pages)", "D. MAX(pages)"],
        correct: 2,
        explanation: "SUM adds all numbers together. Use this when you want a grand total of something numeric.",
        code: "SELECT SUM(pages) FROM books;"
    },
    {
        q: "13. How does GROUP BY transform raw data?",
        options: ["A. It deletes duplicate rows.", "B. It organizes rows into 'labeled buckets' for analysis.", "C. It sorts data alphabetically.", "D. It limits the number of results."],
        correct: 1,
        explanation: "GROUP BY puts data into buckets. For example, put all books by 'King' in one bucket, and all books by 'Gaiman' in another.",
        code: "SELECT author_lname, COUNT(*) FROM books GROUP BY author_lname;"
    },
    {
        q: "14. What happens if you GROUP BY only author_lname when two different authors share the same last name?",
        options: ["A. SQL identifies them as separate individuals.", "B. They are merged into a single bucket, leading to incorrect totals.", "C. The query fails.", "D. SQL uses the first name automatically."],
        correct: 1,
        explanation: "SQL will think they are the same person. To fix this, group by both First Name and Last Name.",
        code: "GROUP BY author_lname, author_fname;"
    },
    {
        q: "15. To find the year the newest book was released, which function is used?",
        options: ["A. MIN(released_year)", "B. MAX(released_year)", "C. NEWEST(released_year)", "D. AVG(released_year)"],
        correct: 1,
        explanation: "MAX finds the highest number. For years, the highest number is the newest year.",
        code: "SELECT MAX(released_year) FROM books;"
    },
    {
        q: "16. Which aggregate function finds the 'middle ground' or 'normal' value for a group?",
        options: ["A. SUM", "B. AVG", "C. COUNT", "D. MIN"],
        correct: 1,
        explanation: "AVG calculates the average. This tells you what is typical or normal for the group.",
        code: "SELECT AVG(stock_quantity) FROM books;"
    },
    {
        q: "17. What does COUNT(DISTINCT author_lname) return?",
        options: ["A. The total number of books.", "B. The number of rows where the author's name is not NULL.", "C. The number of unique last names in the table.", "D. A list of all unique last names."],
        correct: 2,
        explanation: "This counts how many unique last names exist. It ignores duplicates.",
        code: "SELECT COUNT(DISTINCT author_lname) FROM books;"
    },
    {
        q: "18. What is the correct order of clauses in a query that filters and groups?",
        options: ["A. SELECT, GROUP BY, WHERE", "B. SELECT, WHERE, GROUP BY", "C. GROUP BY, WHERE, SELECT", "D. SELECT, FROM, GROUP BY, WHERE"],
        correct: 1,
        explanation: "You must filter rows (WHERE) before you group them (GROUP BY). SQL reads the query in a specific order.",
        code: "SELECT author_lname FROM books WHERE released_year > 2000 GROUP BY author_lname;"
    },
    {
        q: "19. Which function would identify the 'First Customer' in a database sorted by date?",
        options: ["A. MAX(order_date)", "B. SUM(order_date)", "C. MIN(order_date)", "D. COUNT(order_date)"],
        correct: 2,
        explanation: "MIN finds the lowest number. For dates, the lowest number is the earliest date.",
        code: "SELECT MIN(order_date) FROM orders;"
    },
    {
        q: "20. If you want to see the total stock for every year, which query is correct?",
        options: ["A. SELECT SUM(stock_quantity) FROM books;", "B. SELECT released_year, SUM(stock_quantity) FROM books GROUP BY released_year;", "C. SELECT released_year, COUNT(stock_quantity) FROM books;", "D. SELECT released_year FROM books GROUP BY SUM(stock_quantity);"],
        correct: 1,
        explanation: "Select the category (year) and the math (SUM). Then group by the category (year).",
        code: "SELECT released_year, SUM(stock_quantity) FROM books GROUP BY released_year;"
    },
    {
        q: "21. Can aggregate functions be used in a WHERE clause (e.g., WHERE SUM(pages) > 500)?",
        options: ["A. Yes, it is common practice.", "B. No, WHERE filters rows before aggregates are calculated.", "C. Only if you use the AVG function.", "D. Only in MySQL."],
        correct: 1,
        explanation: "WHERE runs first. It filters individual rows. Math (SUM/AVG) happens later. You cannot use math in WHERE.",
        code: "-- This will cause an error"
    },
    {
        q: "22. What is the purpose of 'Bucketing' in data analysis?",
        options: ["A. To delete old data.", "B. To hide sensitive information.", "C. To organize rows into labeled categories for summary calculations.", "D. To increase database speed."],
        correct: 2,
        explanation: "Bucketing is another word for GROUP BY. It groups items so you can count or sum them easily.",
        code: "GROUP BY category;"
    },
    {
        q: "23. Which function would you use to find the largest transaction amount?",
        options: ["A. SUM(amount)", "B. MIN(amount)", "C. COUNT(amount)", "D. MAX(amount)"],
        correct: 3,
        explanation: "MAX finds the biggest number in the list.",
        code: "SELECT MAX(amount) FROM sales;"
    },
    {
        q: "24. In the 'Master Query' example, why is AVG(amount) processed last?",
        options: ["A. Because it is the most complex function.", "B. Because it only calculates the math on the rows remaining after filters are applied.", "C. Because SQL always executes SELECT first.", "D. To save memory."],
        correct: 1,
        explanation: "SQL filters the data first. Then it does the math on the clean data that is left.",
        code: "WHERE condition THEN AVG(amount);"
    },
    {
        q: "25. If COUNT(*) returns 10,000 and COUNT(author_fname) returns 9,850, what does this tell you?",
        options: ["A. There are 150 unique authors.", "B. There are 150 duplicate authors.", "C. There are 150 rows where the first name is missing (NULL).", "D. The query is broken."],
        correct: 2,
        explanation: "The difference shows missing data. 150 rows do not have a first name written.",
        code: "COUNT(*) - COUNT(column) = NULL rows"
    },
    {
        q: "26. Which operator is considered 'The Gatekeeper' because it requires both conditions to be true?",
        options: ["A. OR", "B. NOT", "C. AND", "D. BETWEEN"],
        correct: 2,
        explanation: "AND is strict. Both rules must be true. If one is false, the row is rejected.",
        code: "WHERE author = 'Eggers' AND year > 2010;"
    },
    {
        q: "27. Which operator is considered 'The Net' because it catches rows satisfying any of the rules?",
        options: ["A. AND", "B. OR", "C. IN", "D. !="],
        correct: 1,
        explanation: "OR is wide. It catches anything that meets at least one rule.",
        code: "WHERE author = 'Eggers' OR year > 2010;"
    },
    {
        q: "28. How does the != operator function?",
        options: ["A. It checks if two values are equal.", "B. It checks for 'Not Equal' to exclude specific data.", "C. It acts as a wildcard.", "D. It merges two columns."],
        correct: 1,
        explanation: "!= means 'Not Equal'. Use this to remove specific things you don't want.",
        code: "WHERE author_lname != 'Harris';"
    },
    {
        q: "29. Which keyword provides 'Clean Syntax' for checking if a value falls within a range?",
        options: ["A. RANGE", "B. BETWEEN", "C. WITHIN", "D. LIMIT"],
        correct: 1,
        explanation: "BETWEEN is easier to read. It replaces 'greater than X AND less than Y'.",
        code: "WHERE year BETWEEN 2000 AND 2004;"
    },
    {
        q: "30. What is the advantage of using the IN operator?",
        options: ["A. It is faster than any other operator.", "B. It allows you to check a value against a set of options cleanly.", "C. It only works for numbers.", "D. It deletes the data it finds."],
        correct: 1,
        explanation: "IN lets you list many options without typing OR many times.",
        code: "WHERE author IN ('Carver', 'Smith', 'Lahiri');"
    },
    {
        q: "31. Which string function is used to 'glue puzzle pieces together' into a single identity?",
        options: ["A. UPPER", "B. LENGTH", "C. CONCAT", "D. MERGE"],
        correct: 2,
        explanation: "CONCAT joins text together. It combines First Name and Last Name into Full Name.",
        code: "SELECT CONCAT(first_name, ' ', last_name);"
    },
    {
        q: "32. Why would you use UPPER() or LOWER() on raw data?",
        options: ["A. To make the text look better in reports.", "B. To enforce uniformity and avoid confusion from inconsistent capitalization.", "C. To encrypt the data.", "D. To reduce the file size of the database."],
        correct: 1,
        explanation: "Data is messy. 'USA', 'usa', and 'Usa' are different to SQL. UPPER makes them all the same.",
        code: "WHERE UPPER(country) = 'US';"
    },
    {
        q: "33. Which function helps find and fix incomplete entries by counting characters?",
        options: ["A. COUNT()", "B. SUM()", "C. LENGTH()", "D. SIZE()"],
        correct: 2,
        explanation: "LENGTH counts letters. You can use this to check if a phone number or zip code is the right length.",
        code: "WHERE LENGTH(zip_code) != 5;"
    },
    {
        q: "34. The CASE statement in SQL is primarily used for what?",
        options: ["A. Sorting data.", "B. Implementing conditional logic and flow.", "C. Deleting rows based on criteria.", "D. Counting unique values."],
        correct: 1,
        explanation: "CASE is like If/Then. It lets SQL make decisions and label data based on rules.",
        code: "CASE WHEN stock <= 50 THEN 'Low' ELSE 'High' END"
    },
    {
        q: "35. Which operator would you use to find all orders except those that were 'Cancelled'?",
        options: ["A. AND", "B. NOT", "C. !=", "D. Both B and C are correct"],
        correct: 3,
        explanation: "Both NOT and != mean exclusion. They remove the 'trash' data you don't want.",
        code: "WHERE NOT status = 'Cancelled';"
    },
    {
        q: "36. In MySQL, is the comparison 'Harris' = 'harris' true or false?",
        options: ["A. True, string comparisons are case-insensitive by default.", "B. False, SQL is always case-sensitive.", "C. True, but only for the first letter.", "D. False, because they are different lengths."],
        correct: 0,
        explanation: "MySQL does not care about capital letters by default. 'A' is the same as 'a'.",
        code: "'Harris' = 'harris' -- Returns True"
    },
    {
        q: "37. What is the required closing keyword for a CASE statement?",
        options: ["A. STOP", "B. FINISH", "C. END", "D. EXIT"],
        correct: 2,
        explanation: "Every CASE block must end with the word END. Otherwise, SQL gets confused.",
        code: "CASE ... END"
    },
    {
        q: "38. Which operator allows for 'High Specificity' in a search?",
        options: ["A. OR", "B. AND", "C. LIKE", "D. IN"],
        correct: 1,
        explanation: "AND is very specific. It narrows down results because everything must match.",
        code: "WHERE A = 1 AND B = 2;"
    },
    {
        q: "39. How do you rename a calculated column in a result set (e.g., a concatenated name)?",
        options: ["A. USING", "B. AS", "C. NAME", "D. SET"],
        correct: 1,
        explanation: "AS gives a nickname to your column. It makes the result easier to read.",
        code: "SELECT UPPER(country) AS clean_country;"
    },
    {
        q: "40. What is the 'Signal' in data filtering?",
        options: ["A. The raw data input.", "B. The unwanted data you throw away.", "C. The refined data you keep for analysis.", "D. The speed of the query."],
        correct: 2,
        explanation: "Filtering removes Noise (bad data). The Signal is the good data you keep.",
        code: "Filter Noise -> Keep Signal"
    },
    {
        q: "41. According to the 'Blueprint,' what is the first step in answering a complex question?",
        options: ["A. Calculate Aggregates.", "B. Refine (modify rows using string functions).", "C. Filter (select rows using logical operators).", "D. Sort the final output."],
        correct: 1,
        explanation: "First, clean the text (Refine). Then filter rows. Then do math.",
        code: "1. Refine -> 2. Filter -> 3. Calculate"
    },
    {
        q: "42. Why is raw data often 'Messy'?",
        options: ["A. Inconsistent capitalization.", "B. Different formats for the same thing.", "C. Typing errors.", "D. All of the above."],
        correct: 3,
        explanation: "Data comes from many people. They make mistakes, use different cases, and different formats.",
        code: "Raw Data -> Clean Data"
    },
    {
        q: "43. What is the 'Product' of mastering SQL functions?",
        options: ["A. More code.", "B. Faster computers.", "C. Insight.", "D. Larger databases."],
        correct: 2,
        explanation: "The goal is not just code. The goal is Insight (understanding what the data means).",
        code: "Syntax = Tool, Insight = Product"
    },
    {
        q: "44. In a query using WHERE, GROUP BY, and ORDER BY, which comes last?",
        options: ["A. WHERE", "B. GROUP BY", "C. ORDER BY", "D. SELECT"],
        correct: 2,
        explanation: "Sorting (ORDER BY) is the final step. You sort the data after you have filtered and grouped it.",
        code: "SELECT -> WHERE -> GROUP BY -> ORDER BY"
    },
    {
        q: "45. Which category does BETWEEN belong to in the SQL Quick Reference?",
        options: ["A. REFINE (View)", "B. AGGREGATE (Math)", "C. LOGIC (Filter)", "D. STRING (Shaping)"],
        correct: 2,
        explanation: "BETWEEN is a Logic operator. It filters data based on a range.",
        code: "LOGIC: BETWEEN, AND, OR"
    },
    {
        q: "46. What does SELECT AVG(amount) FROM sales_data WHERE country = 'US' calculate?",
        options: ["A. The total sales in the US.", "B. The average spend of all customers.", "C. The middle-ground spend specifically for US customers.", "D. The number of customers in the US."],
        correct: 2,
        explanation: "It filters for US first. Then it finds the average for only those US rows.",
        code: "WHERE country = 'US' THEN AVG(amount)"
    },
    {
        q: "47. If you want to categorize stock as 'Low' or 'High', which tool is best?",
        options: ["A. DISTINCT", "B. CASE", "C. LIKE", "D. SUM"],
        correct: 1,
        explanation: "CASE lets you create labels based on numbers. If stock < 50, label it 'Low'.",
        code: "CASE WHEN stock <= 50 THEN 'Low' END"
    },
    {
        q: "48. Which function would you use to ensure 'United States', 'usa', and 'USA' are all treated the same?",
        options: ["A. CONCAT", "B. LENGTH", "C. UPPER", "D. DISTINCT"],
        correct: 2,
        explanation: "UPPER makes everything capital letters. Then 'usa' becomes 'USA' and they match.",
        code: "WHERE UPPER(country) = 'USA';"
    },
    {
        q: "49. What is the result of a query that uses LIMIT 0, 5?",
        options: ["A. It returns 0 rows.", "B. It returns the first 5 rows of the result set.", "C. It returns rows starting from the 5th position.", "D. It returns all rows except the first 5."],
        correct: 1,
        explanation: "0 means start at the very beginning. 5 means take 5 rows. So you get the first 5.",
        code: "LIMIT 0, 5;"
    },
    {
        q: "50. What is the 'Mission' described in the Advanced SQL Toolkit?",
        options: ["A. To memorize all SQL commands.", "B. To move from raw data to intelligent insight.", "C. To build the largest database possible.", "D. To replace manual data entry."],
        correct: 1,
        explanation: "The mission is Insight. Use SQL to turn messy raw data into smart answers.",
        code: "Raw Data -> Intelligent Insight"
    }
];

function loadQuiz() {
    const container = document.getElementById('quizContainer');
    let html = '';

    questions.forEach((item, index) => {
        html += `
            <div class="col-12">
                <div class="card question-card" id="card-${index}">
                    <div class="card-body">
                        <h5 class="question-title mb-3">${item.q}</h5>
                        <div class="options-group">
                            ${item.options.map((opt, i) => `
                                <div class="form-check mb-2">
                                    <input class="form-check-input" type="radio" name="q${index}" id="q${index}opt${i}" value="${i}">
                                    <label class="form-check-label option-label" for="q${index}opt${i}">
                                        ${opt}
                                    </label>
                                </div>
                            `).join('')}
                        </div>
                        <div class="explanation-box" id="expl-${index}">
                            <strong>Explanation:</strong> ${item.explanation}
                            ${item.code ? `<pre class="sql-code">${item.code}</pre>` : ''}
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function submitQuiz() {
    let score = 0;
    let answered = 0;

    questions.forEach((item, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        const card = document.getElementById(`card-${index}`);
        const explanation = document.getElementById(`expl-${index}`);
        const inputs = document.querySelectorAll(`input[name="q${index}"]`);

        // Disable inputs after submit
        inputs.forEach(input => input.disabled = true);

        if (selected) {
            answered++;
            const answerValue = parseInt(selected.value);
            
            if (answerValue === item.correct) {
                score++;
                card.classList.add('border-success');
                selected.parentElement.classList.add('correct-answer');
            } else {
                card.classList.add('border-danger');
                selected.parentElement.classList.add('wrong-answer');
                // Highlight the correct answer
                const correctInput = document.getElementById(`q${index}opt${item.correct}`);
                correctInput.parentElement.classList.add('correct-answer');
            }
        } else {
            card.classList.add('border-danger');
            // Highlight the correct answer even if not attempted
            const correctInput = document.getElementById(`q${index}opt${item.correct}`);
            correctInput.parentElement.classList.add('correct-answer');
        }

        // Show explanation
        explanation.style.display = 'block';
    });

    // Show Results
    const resultSection = document.getElementById('resultSection');
    const scoreDisplay = document.getElementById('scoreDisplay');
    const scoreMessage = document.getElementById('scoreMessage');

    resultSection.classList.remove('d-none');
    scoreDisplay.textContent = `${score} / ${questions.length}`;

    if (score === 50) {
        scoreMessage.textContent = "Perfect! You are a SQL Master!";
        scoreMessage.className = "lead text-success fw-bold";
    } else if (score >= 40) {
        scoreMessage.textContent = "Great job! You know your SQL well.";
        scoreMessage.className = "lead text-primary";
    } else if (score >= 25) {
        scoreMessage.textContent = "Good effort. Review the explanations to improve.";
        scoreMessage.className = "lead text-warning";
    } else {
        scoreMessage.textContent = "Keep studying! Read the explanations carefully.";
        scoreMessage.className = "lead text-danger";
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initialize Quiz
window.onload = loadQuiz;