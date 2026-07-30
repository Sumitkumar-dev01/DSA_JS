# Write your MySQL query statement below
select distinct author_id as id from Views
where author_id = viewer_id 
order by author_id asc


/*
for duplicate -> distinct 
for sorting  -> order by author_id  asc 
*/
