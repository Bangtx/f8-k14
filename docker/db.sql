-- create a new one
create database "f8-db";

-- remove existing db
drop database if exists "f8-db";

select (1 + 1);
select (10 - 2);
select (10 * 2);
select (11.0 / 3);
select (round(11 / 3));
select concat('123', 'hj');

select array[4, 2, 1];
select '{"a":
  {"b": ["foo","bar"         ]}}'::json;
select '{"a":
  {"b": ["foo","bar"          ]}}'::jsonb;


create table if not exists employee (
                                        id bigint,
                                        name text,
                                        age int8,
                                        address text, -- default 'test'
                                        active bool default true
);


alter table employee add column salary int;

alter table employee add column active bool default true;

alter table employee rename name to fullname;

alter table employee drop column if exists salary;

select * from employee;

insert into employee(id, fullname) values (1, 'nguyen van a');
insert into employee(id, fullname) values (2, 'nguyen van b');
insert into employee(id, fullname, age) values (3, 'nguyen van c', 90);

select id, fullname, age from employee where age = 90;

update employee set address = 'Ha Noi';
update employee set age = 9, address = 'Da Nang' where id = 3;

delete from employee where id = 2;

update employee set active = false where id in (1, 3) and fullname = 'nguyen van a';
update employee set active = false where (id = 1 or id = 3) and fullname = 'nguyen van a';


insert into employee (id, fullname)
values (1, 'nguyen van a'),
       (2, 'nguyen van b'),
       (3, 'nguyen van c');



