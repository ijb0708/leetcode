# Write your MySQL query statement below
select 
    name
from 
    Customer
where
    1=1
and
    referee_id != 2
or 
    referee_id is null;