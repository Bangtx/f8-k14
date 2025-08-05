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


insert into employee (id, fullname, age)
values (1, 'nguyen van a', 20),
       (2, 'nguyen van b', 40),
       (3, 'nguyen van c', 5000000000000000000);

update employee set active = false where id = 2;

SELECT * FROM employee
WHERE fullname LIKE '%van c%';

delete from employee;
truncate employee;

alter table employee add column new_age int8;
update employee set new_age = age where age is not null;
alter table employee drop column age;
alter table employee rename new_age to age;


drop table employee;
create table if not exists employee (
                                        id bigserial primary key,
                                        name text,
                                        age int8,
                                        address text, -- default 'test'
                                        active bool default true
);

insert into employee (id, name, age)
values (1, 'nguyen van a', 20),
       (2, 'nguyen van b', 40),
       (3, 'nguyen van c', 60);

insert into employee(name) values ('nguyen van d');
insert into employee(name) values ('nguyen van e');

select max(id) from employee;

select setval('employee_id_seq', (select max(id) from employee));


drop table employee;
create table if not exists employee (
                                        id bigserial primary key,
                                        name text,
                                        age int8,
                                        address text, -- default 'test'
                                        company_id bigint,
                                        active bool default true
);

drop table company;
create table if not exists company (
                                       id bigserial primary key,
                                       name text,
                                       active bool default true
);

insert into employee (id, name, age, company_id)
values (1, 'nguyen van a', 20, 1),
       (2, 'nguyen van b', 40, 1),
       (3, 'nguyen van c', 60, 3);

insert into company (id, name)
values (1, 'f8'),
       (2, 'f9'),
       (3, 'f10');

select employee.id,
       employee.name as name,
       company.name as company
from employee
         left join company on company.id = employee.company_id
where employee.name = 'nguyen van a';


select company.id, company.name, employee.name
from company
         join employee on company.id = employee.company_id;

select employee.id,
       employee.name as name,
       company.name as company
from employee
         right join company on company.id = employee.company_id;



create table employee (
                          id bigserial,
                          name text,
                          salary int,
                          age int8,
                          created_at timestamp with time zone default now(),
                          created_by bigint,
                          modified_at timestamp with time zone,
                          modified_by bigint,
                          deleted_at timestamp with time zone,
                          deleted_by bigint,
                          active bool default true,
                          constraint pk_employee primary key (id)
);

select * from employee where active = true order by salary;
select * from employee where active order by salary desc ;
select * from employee where active order by age, salary desc ;

select
    age,
    sum(salary) as total_salary,
    coalesce(
            json_agg(
                    jsonb_build_object(
                            'name', employee.name,
                            'salary', employee.salary
                    )
            ) filter ( where employee.salary > 5000 )
    ) as high_salary_members

from employee
where active
group by age
having json_array_length(
               coalesce(
                       json_agg(
                               jsonb_build_object(
                                       'name', employee.name,
                                       'salary', employee.salary
                               )
                       ) filter ( where employee.salary > 5000 )
               )
       ) > 0;

select
    age,
    sum(salary) as total_salary,
    coalesce(
            json_agg(
                    jsonb_build_object(
                            'name', employee.name,
                            'salary', employee.salary
                    )
            ) filter ( where employee.salary > 5000 )
    ) as high_salary_members

from employee
where active
group by age
    limit 1;

explain
select * from employee where salary > 3000;
-- 17

explain
select * from employee group by id having salary > 3000;
-- 20



select school.id,
       school.name,
       json_agg(
               json_build_object(
                       'id', class.id,
                       'name', class.name,
                       'students', (
                           select json_agg(
                                          json_build_object('id', student.id, 'name', student.name)
                                  )
                           from student
                                    join class_student on student.id = class_student.student_id
                           where student.active and class_student.class_id = class.id
                       )
               )
       )  as classes
from school
         join class on class.school_id = school.id
-- join class_student on class.id = class_student.class_id and class_student.active
-- join student on student.id = class_student.student_id
group by school.id, school.name;














DROP SCHEMA public CASCADE;
CREATE SCHEMA public;
SELECT lo_unlink(l.oid)
FROM pg_largeobject_metadata l;

drop table student;
create table student (
                         id bigserial,
                         name text,
                         age int,
                         phone text,
                         address text,
                         birth_date date,
                         guardian_name text,
                         guardian_phone text,
                         enrollment_date date,
                         created_at timestamp with time zone default now(),
                         created_by bigint,
                         modified_at timestamp with time zone,
                         modified_by bigint,
                         deleted_at timestamp with time zone,
                         deleted_by bigint,
                         active bool default true,
                         constraint pk_student primary key (id)
);

drop table class;
create table class (
                       id bigserial,
                       name text,
                       school_id bigint,
                       grade int, -- lớp 1 đến lớp 12
                       teacher_name text,
                       room_number text,
                       status text default 'open', -- open / closed / archived
                       locked bool default false,
                       version int default 1,
                       note text,
                       created_at timestamp with time zone default now(),
                       created_by bigint,
                       modified_at timestamp with time zone,
                       modified_by bigint,
                       deleted_at timestamp with time zone,
                       deleted_by bigint,
                       active bool default true,
                       constraint pk_class primary key (id)
);

drop table school;
create table school (
                        id bigserial,
                        name text,
                        address text,
                        rank text,
                        phone text,
                        email text,
                        website text,
                        established_year int,
                        principal_name text,
                        status text default 'active', -- active / inactive / suspended
                        locked bool default false,
                        version int default 1,
                        created_at timestamp with time zone default now(),
                        created_by bigint,
                        modified_at timestamp with time zone,
                        modified_by bigint,
                        deleted_at timestamp with time zone,
                        deleted_by bigint,
                        active bool default true,
                        constraint pk_school primary key (id)
);

drop table class_student;
create table class_student (
                               id bigserial,
                               class_id bigint,
                               student_id bigint,
                               created_at timestamp with time zone default now(),
                               created_by bigint,
                               modified_at timestamp with time zone,
                               modified_by bigint,
                               deleted_at timestamp with time zone,
                               deleted_by bigint,
                               active bool default true,
                               constraint pk_class_student primary key (id)
);

insert into school (name, address, rank, phone, email, website, established_year, principal_name)
select
    'School ' || i,
    'Address ' || i,
    CASE WHEN i % 3 = 0 THEN 'A' WHEN i % 3 = 1 THEN 'B' ELSE 'C' END,
    '0900000' || i,
    'school' || i || '@example.com',
    'http://school' || i || '.edu.vn',
    1990 + (i % 30),
    'Principal ' || i
from generate_series(1, 1000) as s(i); -- 1000 schools

insert into class (name, school_id, grade, teacher_name, room_number)
select
    'Class ' || ((s - 1) * 50 + c),
    s,
    1 + ((c - 1) % 12),
    'Teacher ' || ((s - 1) * 50 + c),
    'Room ' || ((s - 1) * 50 + c)
from generate_series(1, 1000) as s, generate_series(1, 50) as c;



insert into student (name, age, phone, address, birth_date, guardian_name, guardian_phone, enrollment_date)
select
    'Student ' || i,
    6 + (i % 12), -- tuổi từ 6 đến 17
    '0912' || lpad(i::text, 6, '0'),
    'Street ' || i,
    date '2005-01-01' + (i % 500),
    'Parent ' || i,
    '0988' || lpad(i::text, 6, '0'),
    date '2020-09-01' + (i % 100)
from generate_series(1, 5000000) as s(i);

-- Giả sử bạn đã có 5000 học sinh và 1000 lớp
-- Mỗi lớp có 30 học sinh → 1000 × 30 = 30,000 bản ghi

INSERT INTO class_student (class_id, student_id)
SELECT
    c,
    trunc(random() * 5000000 + 1)::int -- chọn ngẫu nhiên học sinh từ 1 đến 5 triệu
FROM generate_series(1, 1000) AS cls(c),
     generate_series(1, 30) AS student_per_class(s); -- mỗi lớp 30 học sinh



with
--     students as (
--         select id, name from student where active
--     ),
tmp_classes as (
    select
        class.id,
        class.name,
        class.school_id,
        json_agg(
                json_build_object('id', student.id, 'name', student.name)
        ) as students
    from class
             join class_student on class.id = class_student.class_id
             join student on student.id = class_student.student_id
    where class.active
    group by class.id, class.name, class.school_id
)

select
    school.id,
    school.name,
    json_agg(
            json_build_object(
                    'id', tmp_classes.id,
                    'name', tmp_classes.name,
                    'students', tmp_classes.students
            )
    ) as classes
from school
         join tmp_classes on tmp_classes.school_id = school.id
where school.id < 200
group by school.id, school.name ;







with
--     class_ids as (
--         select id from class where active and class.school_id < 200
--     ),
tmp_classes as (
    select
        class.id,
        class.name,
        class.school_id,
        json_agg(
                json_build_object('id', student.id, 'name', student.name)
        ) as students
    from class
             join class_student on class.id = class_student.class_id
             join student on student.id = class_student.student_id
    where class.active and class.school_id < 200
    group by class.id, class.name, class.school_id
)

select
    school.id,
    school.name,
    json_agg(
            json_build_object(
                    'id', tmp_classes.id,
                    'name', tmp_classes.name,
                    'students', tmp_classes.students
            )
    ) as classes
from school
         join tmp_classes on tmp_classes.school_id = school.id
where school.id < 200 and school.active
group by school.id, school.name ;



