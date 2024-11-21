FROM python:3.10-slim


ENV PYTHONDONTWRITEBYTECODE=1  # Prevents Python from writing .pyc files
ENV PYTHONUNBUFFERED=1         # Ensures output is sent directly to the terminal

WORKDIR /app


COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt


COPY . /app/


EXPOSE 8000


CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
