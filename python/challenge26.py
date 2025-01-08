from datetime import timedelta
def get_completed(time_worked: str, total_time: str) -> str:
    hours_worked, minutes_worked, seconds_worked = map(int, time_worked.split(':'))
    total_seconds_worked = timedelta(hours=hours_worked, minutes=minutes_worked, seconds=seconds_worked).total_seconds()

    hours_total, minutes_total, seconds_total = map(int, total_time.split(':'))
    total_seconds_total = timedelta(hours=hours_total, minutes=minutes_total, seconds=seconds_total).total_seconds()

    percentage = round((total_seconds_worked / total_seconds_total) * 100)
    return f'{int(percentage)}%'

print(get_completed('01:00:00', '03:00:00')) # 33%
print(get_completed('02:00:00', '04:00:00')) # 50%
print(get_completed('01:00:00', '01:00:00')) # 100%
print(get_completed('00:10:00', '01:00:00')) # 17%
print(get_completed('01:10:10', '03:30:30')) # 33%
print(get_completed('03:30:30', '05:50:50')) # 60%