# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|

### Association
- has_many :groups
- has_many :posts

## postsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|image|file||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

###Association
- belongs_to :user
- belongs_to :groups

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|text|null: false|
|user_id|integer|null: false, foreign_key: true|
|post_id|integer|null: false, foreign_key: true|

###Association
- belongs_to :posts
- has_many :users

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user