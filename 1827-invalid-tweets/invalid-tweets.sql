# Write your MySQL query statement below
select
    tweet_id
from 
    Tweets
where
    1=1
and
    length(content) > 15;
