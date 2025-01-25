def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x, y):
    if y == 0:
        return "На ноль делить нельзя!"
    return x / y

def calculator():
    operations = {
        '1': ('Сложение', add),
        '2': ('Вычитание', subtract),
        '3': ('Умножение', multiply),
        '4': ('Деление', divide)
    }

    print("Выберите операцию:")
    for key, (name, _) in operations.items():
        print(f"{key}. {name}")

    while True:
        choice = input("Введите номер операции (1/2/3/4) или 'q' для выхода: ")

        if choice == 'q':
            print("Выход из калькулятора.")
            break

        if choice in operations:
            try:
                num1 = float(input("Введите первое число: "))
                num2 = float(input("Введите второе число: "))
            except ValueError:
                print("Пожалуйста, введите корректные числа.")
                continue

            operation_name, operation_func = operations[choice]
            result = operation_func(num1, num2)
            print(f"{num1} {operation_name.lower()} {num2} = {result}")

            # После операции предлагаем выполнить еще одну
            continue_choice = input("Хотите выполнить еще одну операцию? (y/n): ")
            if continue_choice.lower() != 'y':
                print("Выход из калькулятора.")
                break
        else:
            print("Неверный ввод. Пожалуйста, выберите номер операции от 1 до 4.")

if __name__ == "__main__":
    calculator()
