import unittest
import random
from calculator import add, subtract, multiply, divide

class TestCalculator(unittest.TestCase):

    def test_addition(self):
        num1 = random.uniform(-100, 100)
        num2 = random.uniform(-100, 100)
        expected = num1 + num2
        self.assertEqual(add(num1, num2), expected)

    def test_subtraction(self):
        num1 = random.uniform(-100, 100)
        num2 = random.uniform(-100, 100)
        expected = num1 - num2
        self.assertEqual(subtract(num1, num2), expected)

    def test_multiplication(self):
        num1 = random.uniform(-100, 100)
        num2 = random.uniform(-100, 100)
        expected = num1 * num2
        self.assertEqual(multiply(num1, num2), expected)

    def test_division(self):
        num1 = random.uniform(-100, 100)
        num2 = random.uniform(-100, 100)
        
        # Если num2 равно 0, проверяем, что возвращается правильная ошибка
        if num2 == 0:
            expected = "На ноль делить нельзя!"
        else:
            expected = num1 / num2

        self.assertEqual(divide(num1, num2), expected)

if __name__ == "__main__":
    unittest.main()
