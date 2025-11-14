deploy:
	docker-compose down -v && docker-compose up -d 

status:
	docker-compose ps