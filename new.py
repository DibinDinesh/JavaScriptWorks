def compare_files(file1_path, file2_path):
    with open(file1_path, 'r') as file1, open(file2_path, 'r') as file2:
        file1_lines = file1.readlines()
        file2_lines = file2.readlines()

        differences = []

        for i, (line1, line2) in enumerate(zip(file1_lines, file2_lines), start=1):
            if line1 != line2:
                differences.append((i, line1, line2))

        return differences

# Paths to your files
file1_path = 'C://Users//arjun//Desktop//Arjun.txt'
file2_path = 'C://Users//arjun//Desktop//Dibin.txt'

differences = compare_files(file1_path, file2_path)

if differences:
    for diff in differences:
        print(f"Difference in line {diff[0]}:\nFile 1: {diff[1]}File 2: {diff[2]}")
else:
    print("The files are identical.")
