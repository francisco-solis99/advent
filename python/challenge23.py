def find_missing_numbers(nums):
    missing = []
    for i in range(1,max(nums)+1):
        if i not in nums:
            missing.append(i)
    return missing

print(find_missing_numbers([1, 2, 4, 6])) # [3, 5]
print(find_missing_numbers([1, 2, 3, 4, 5])) # []
print(find_missing_numbers([1, 2, 3, 4, 5, 6, 7, 8, 10])) # [9]