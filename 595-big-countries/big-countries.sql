# Write your MySQL query statement below
select 
    name
    , population
    , area
from 
    World
where
    1=1
and
    population >= 25000000
or
    area >= 3000000;