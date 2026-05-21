import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {

  @override
  Widget build(BuildContext context) {

    return MaterialApp(

      home: Scaffold(

        appBar: AppBar(
          title: Text("Food Delivery"),
        ),

        body: Padding(

          padding: EdgeInsets.all(20),

          child: Column(

            children: [

              TextField(
                decoration: InputDecoration(
                  hintText: "Email",
                ),
              ),

              SizedBox(height: 20),

              TextField(
                decoration: InputDecoration(
                  hintText: "Password",
                ),
              ),

              SizedBox(height: 20),

              ElevatedButton(
                onPressed: () {},
                child: Text("Login"),
              ),

              SizedBox(height: 20),

              Card(
                child: ListTile(
                  title: Text("Pizza"),
                  subtitle: Text("₹299"),
                ),
              ),

              Card(
                child: ListTile(
                  title: Text("Burger"),
                  subtitle: Text("₹199"),
                ),
              )

            ],
          ),
        ),
      ),
    );
  }
}