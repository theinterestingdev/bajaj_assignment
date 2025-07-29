const handleBfhl = (req, res) => {
  try {
    const { data } = req.body;

    if (!Array.isArray(data)) {
      return res.status(400).json({ 
        is_success: false,
        error: "data must be an array" 
      });
    }

    const odd_numbers = [];
    const even_numbers = [];
    const alphabets = [];
    const special_characters = [];
    let sum = 0;
    let allLetters = []; 

    data.forEach((item) => {
      if (typeof item === 'string' && !isNaN(item) && item.trim() !== '') {
        const num = parseInt(item);
        sum += num;
        (num % 2 === 0 ? even_numbers : odd_numbers).push(item.toString());
      } else if (typeof item === 'string' && /^[a-zA-Z]+$/.test(item)) {
        
        const upperItem = item.toUpperCase();
        alphabets.push(upperItem);
        
        allLetters.push(...item.split(''));
      } else if (typeof item === 'string') {
        special_characters.push(item);
      }
    });

    const reversedLetters = [...allLetters].reverse();
    let concat_string = '';
    reversedLetters.forEach((char, index) => {
      if (index % 2 === 0) {
        concat_string += char.toUpperCase();
      } else {
        concat_string += char.toLowerCase();
      }
    });

    return res.status(200).json({
      is_success: true,
      user_id: "kartik_sharma_17091999",
      email: "kartik1759.be22@chitkara.edu.in",
      roll_number: "2210991759",
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: sum.toString(),
      concat_string,
    });
  } catch (err) {
    return res.status(500).json({
      is_success: false,
      error: "Internal Server Error",
    });
  }
};

module.exports = { handleBfhl };