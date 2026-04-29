package com.myprojecy.alpine;

import com.vaadin.flow.component.Text;
import com.vaadin.flow.component.applayout.AppLayout;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.page.ColorScheme.Value;
import com.vaadin.flow.router.Route;

@Route("/")
public class demoLayout extends AppLayout {

	private static final long serialVersionUID = 2941347691437351255L;

	public demoLayout() {
		this.getStyle().setBackgroundColor("black");
		getStyle().setColor("WHITE");

		Text t = new Text("Hello !");
		HorizontalLayout header = new HorizontalLayout(t);

		addToNavbar(header);
		getStyle().setColorScheme(Value.DARK);
	}
}
