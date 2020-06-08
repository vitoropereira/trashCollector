-- SQLite
 select distinct `points`.* from `points` inner join `ponts_items` on `points`.`id` = `points_items`.`point_id` where `points_items`.`it
ems_id` in (1, 5) and `city` = 'Rec' and `uf` = 'PE'