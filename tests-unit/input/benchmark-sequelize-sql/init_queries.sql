create role tester password 'passwd' superuser createdb createrole inherit login;
create table test ( id integer, col integer );