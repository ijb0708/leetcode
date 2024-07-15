# Write your MySQL query statement below
select
    distinct author_id as id
from
    Views
where
    1=1
and
    author_id = viewer_id
order by
    author_id asc;