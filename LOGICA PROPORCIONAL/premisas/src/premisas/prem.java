package premisas;

import javax.swing.*;
import javax.swing.text.Style;

import java.awt.*;
import java.awt.event.*;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class prem extends JFrame implements ActionListener {

    JFrame frame;
    JTextField pr1, pr2, pr3, pr4;
    JLabel prla1, labelmain, prla2, prla3, prla4, ng1, ng2, ng3, ng4, cn1, dis1, cond1;
    JCheckBox cn, dis, neg1, neg2, neg3, neg4, cond;
    JButton buttonMatrix;
    JPanel panel;
    JPanel panelT;
    JPanel pricipal;

    prem() {
        frame = new JFrame("Proposiciones logicas");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        // Add the ubiquitous "Hello World" label.
        labelmain = new JLabel("<html><h1>Creador de matrices simetricas hecho por : Guino Yujra</h1></html>"); // creating
        // JLabel
        labelmain.setBounds(100, 50, 600, 100); // x axis, y axis, width, height
        frame.add(labelmain);

        // Add text field
        pr1 = new JTextField(); // creating instance of JTextField
        pr1.setBounds(100, 200, 200, 20); // x axis, y axis, width, height
        frame.add(pr1);
        pr2 = new JTextField(); // creating instance of JTextField
        pr2.setBounds(350, 200, 200, 20); // x axis, y axis, width, height
        frame.add(pr2);
        pr3 = new JTextField(); // creating instance of JTextField
        pr3.setBounds(100, 250, 200, 20); // x axis, y axis, width, height
        frame.add(pr3);
        pr4 = new JTextField(); // creating instance of JTextField
        pr4.setBounds(350, 250, 200, 20); // x axis, y axis, width, height
        frame.add(pr4);

        neg1 = new JCheckBox();
        neg1.setBounds(70, 200, 20, 20);
        neg2 = new JCheckBox();
        neg2.setBounds(320, 200, 20, 20);
        neg3 = new JCheckBox();
        neg3.setBounds(70, 250, 20, 20);
        neg4 = new JCheckBox();
        neg4.setBounds(320, 250, 20, 20);
        cn = new JCheckBox();
        dis = new JCheckBox();
        cond = new JCheckBox();
        cn.setBounds(800, 150, 20, 20);
        cn1 = new JLabel("Conjuncion");
        cn1.setBounds(830, 150, 200, 20);
        dis.setBounds(800, 200, 20, 20);
        dis1 = new JLabel("Disyuncion");
        dis1.setBounds(830, 200, 200, 20);
        cond.setBounds(800, 250, 20, 20);
        cond1 = new JLabel("Condicional");
        cond1.setBounds(830, 250, 200, 20);
        ng1 = new JLabel("N");
        ng2 = new JLabel("N");
        ng3 = new JLabel("N");
        ng4 = new JLabel("N");

        ng1.setBounds(60, 200, 10, 20);
        ng2.setBounds(310, 200, 10, 20);
        ng3.setBounds(60, 250, 10, 20);
        ng4.setBounds(310, 250, 10, 20);

        frame.add(cn);
        frame.add(cn1);
        frame.add(cond);
        frame.add(cond1);
        frame.add(dis);
        frame.add(dis1);

        frame.add(ng1);
        frame.add(ng2);
        frame.add(ng3);
        frame.add(ng4);

        frame.add(neg1);
        frame.add(neg2);
        frame.add(neg3);
        frame.add(neg4);

        prla1 = new JLabel("Premisa 1");
        prla1.setBounds(100, 170, 200, 20); // x axis, y axis, width, height

        prla2 = new JLabel("Premisa 2");
        prla2.setBounds(350, 170, 200, 20); // x axis, y axis, width, height

        prla3 = new JLabel("Premisa 3");
        prla3.setBounds(100, 220, 200, 20);

        prla4 = new JLabel("Premisa 4");
        prla4.setBounds(350, 220, 200, 20);

        frame.add(prla1);
        frame.add(prla2);
        frame.add(prla3);
        frame.add(prla4);
        // Add text field

        // Add button click
        buttonMatrix = new JButton("Operar Premisas"); // creating instance of JButton
        buttonMatrix.setBounds(570, 205, 200, 60);// x axis, y axis, width, height
        buttonMatrix.addActionListener(this);

        // Add panel
        frame.add(buttonMatrix);

        // setting side for the frame.
        frame.setSize(1280, 800);
        frame.setLayout(null);// using no layout managers
        frame.getContentPane().setBackground(new java.awt.Color(74, 161, 146));
        // Display the window.
        frame.setVisible(false);
        frame.setVisible(true);
    }

    public String negacion(String u) {
        u = "no es cierto que " + u;
        return u;
    }

    public void resetViewFrame() {
        if (panel != null) {
            frame.remove(panel);
        }
    }

    public void conjuncion(String u, String v, String b, String n, String P, String Q, String R, String T) {
        String c = u + " ademas " + v + " tambien " + b + " y " + n;
        panel = new JPanel(new GridLayout(2, 2));
        panel.setBounds(200, 500, 1000, 100);
        String e = P + "^" + Q + "^" + R + "^" + T;
        JTextField position = new JTextField(c);
        position.setHorizontalAlignment(JTextField.CENTER);
        JTextField position1 = new JTextField(e);
        position1.setHorizontalAlignment(JTextField.CENTER);
        panel.add(position);
        panel.add(position1);
        frame.add(panel);
    }

    public void disyuncion(String u, String v, String b, String n, String P, String Q, String R, String T) {
        String c = u + " o que " + v + " o que " + b + " o que " + n;
        panel = new JPanel(new GridLayout(2, 2));
        panel.setBounds(200, 500, 1000, 100);
        String e = P + "v" + Q + "v" + R + "v" + T;
        JTextField position = new JTextField(c);
        position.setHorizontalAlignment(JTextField.CENTER);
        JTextField position1 = new JTextField(e);
        position1.setHorizontalAlignment(JTextField.CENTER);
        panel.add(position);
        panel.add(position1);
        frame.add(panel);
    }

    public void condicional(String u, String v, String b, String n, String P, String Q, String R, String T) {
        String c = u + " si " + v + " solo si " + b + " si " + n;
        panel = new JPanel(new GridLayout(2, 2));
        panel.setBounds(200, 500, 1000, 100);
        String e = P + "->" + Q + "->" + R + "->" + T;
        JTextField position = new JTextField(c);
        position.setHorizontalAlignment(JTextField.CENTER);
        JTextField position1 = new JTextField(e);
        position1.setHorizontalAlignment(JTextField.CENTER);
        panel.add(position);
        panel.add(position1);
        frame.add(panel);
    }

    public void actionPerformed(ActionEvent e) {
        resetViewFrame();
        String a, b, c, d;
        String p = "P";
        String q = "Q";
        String r = "R";
        String t = "T";
        a = pr1.getText();
        b = pr2.getText();
        c = pr3.getText();
        d = pr4.getText();
        if (neg1.isSelected()) {
            a = negacion(a);
            p = "~P";
        }
        if (neg2.isSelected()) {
            b = negacion(b);
            q = "~Q";
        }
        if (neg3.isSelected()) {
            c = negacion(c);
            r = "~R";
        }
        if (neg4.isSelected()) {
            d = negacion(d);
            t = "~T";
        }
        if (cn.isSelected()) {
            conjuncion(a, b, c, d, p, q, r, t);
        } else if (dis.isSelected()) {
            disyuncion(a, b, c, d, p, q, r, t);
        } else if (cond.isSelected()) {
            condicional(a, b, c, d, p, q, r, t);
        }
        frame.setVisible(false);
        frame.setVisible(true);

    }

    public static void main(String[] args) {
        new prem();
        // TODO code application logic here
    }

}